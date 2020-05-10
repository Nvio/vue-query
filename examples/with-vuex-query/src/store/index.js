import Vue from "vue";
import Vuex from "vuex";
import { VuexQuery } from "../../../../packages/vue-query/src"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { _queries: VuexQuery(Vue) }
})
