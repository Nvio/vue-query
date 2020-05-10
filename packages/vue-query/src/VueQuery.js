const vueQueryMixin = {
  beforeCreate() {
    // if vuex-query is detected
    if (this.$store && this.$store.getters.$queries) {
      this.$store.dispatch('addQueries', this.$options.queries)
    }
  },
  data() {
    // if vuex-query is not detected, we setup queries locally to the component
    if (this.$store && this.$store.getters.$queries) return {}
    const { queries } = this.$options;
    const _queries = {};
    for (const key in queries) {
      const query = queries[key]
      _queries[key] = {
        data: null,
        error: null,
        loading: true,
      };
      const action = typeof query === 'function' ? query : query.action
      const exec = () => {
        action().then(data => {
          _queries[key] = {
            data,
            error: null,
            loading: false,
          }
        }).catch(error => {
          _queries[key] = {
            data: null,
            error,
            loading: false,
          }
        })
      }
      if (typeof query === 'object' && query.refetchInterval) {
        setInterval(exec, query.refetchInterval)
      }
      else {
        exec()
      }
    }

    return { _queries }
  },
  computed: {
    $queries() {
      return this.$store && this.$store.getters.$queries ? this.$store.getters.$queries : this.$data._queries;
    }
  },
}

const VueQuery = {
  install(Vue, options = {}) {
    Vue.mixin(vueQueryMixin)
  }
}

export { VueQuery, vueQueryMixin }
