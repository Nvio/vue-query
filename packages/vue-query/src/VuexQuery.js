import Vue from "vue"
import { mapState } from "vuex";

Vue.config.vuexQuery = true;

const mapQueries = mapState

const VuexQuery = {
  state: () => ({}),
  getters: {
    $queries(state) {
      return state;
    }
  },
  mutations: {
    setQuery(state, query) {
      state[query.name] = query
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
        // dispatch('setQuery', {
        //   data,
        //   name: queryName,
        //   loading: false,
        //   error: null,
        // })
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
}

export default VuexQuery
export { VuexQuery, mapQueries };
