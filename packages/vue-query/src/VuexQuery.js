import { mapState } from "vuex";

const mapQueries = mapState

const VuexQuery = Vue => ({
  state: () => ({}),
  getters: {
    $queries(state) {
      return state;
    }
  },
  mutations: {
    setQuery(state, query) {
      Vue.set(state, query.name, query)
    },
  },
  actions: {
    addQueries({ state, commit, dispatch }, queries) {
      for (const queryName in queries) {
        if (!state[queryName]) {
          const query = queries[queryName]
          dispatch('initQuery', queryName).then(() => {
            dispatch('runQuery', { queryName, query })
          })
        }
      }
    },
    runQuery({ dispatch }, { query, queryName }) {
      return query().then(data => {
        return dispatch('setQuery', {
          data,
          name: queryName,
          loading: false,
          error: null,
        })
      }).catch(console.log)
    },
    setQuery({ commit }, query) {
      commit('setQuery', query)
    },
    initQuery({ commit }, queryName) {
      commit('setQuery', {
        name: queryName,
        data: null,
        loading: true,
        error: null
      })
    }
  },
})

export default VuexQuery
export { VuexQuery, mapQueries };
