import Vue from 'vue';
import Vuex from 'vuex';
import countries from './modules/countries';
import autocomplete from './modules/autocomplete';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    countries,
    autocomplete
  }
});
