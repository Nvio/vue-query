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
      state[queryName] = null
    },

    setQueryData(state, query) {
      state[query.name] = query.data
      state.loaded += 1;
    }
  },
  actions: {
    addQueries({ state, commit, dispatch }, queries) {
      for (const queryName in queries) {
        const query = queries[queryName]
        commit('initQuery', queryName)

        query().then(data => {
          dispatch('setQueryData', {
            name: queryName,
            data
          })
        }).catch(console.log)
      }
    },
    setQueryData({ commit }, query) {
      commit('setQueryData', query)
    }
  },
}

export default VuexQuery
export { VuexQuery, mapQueries };
