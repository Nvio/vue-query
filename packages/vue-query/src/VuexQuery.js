import Vue from "vue"
import { mapState } from "vuex";

Vue.config.vuexQuery = true;

const mapQueries = mapState

const VuexQuery = {
  state: () => ({
    loaded: 0,
  }),
  mutations: {
    initQuery(state, queryName) {
      state[queryName] = {
        data: null,
        loading: true,
        error: null
      }
    },

    setQuery(state, query) {
      state[query.name] = query
    },

    increaseLoaded(state) {
      state.loaded += 1
    }
  },
  actions: {
    addQueries({ state, commit, dispatch }, queries) {
      for (const queryName in queries) {
        if (!state[queryName]) {
          const query = queries[queryName]
          commit('initQuery', queryName)

          query().then(data => {
            dispatch('setQuery', {
              data,
              name: queryName,
              loading: false,
              error: null,
            })
          }).catch(console.log)
        } else {
          commit('increaseLoaded')
        }
      }
    },
    setQuery({ commit }, query) {
      commit('setQuery', query)
      commit('increaseLoaded');
    }
  },
}

export default VuexQuery
export { VuexQuery, mapQueries };
