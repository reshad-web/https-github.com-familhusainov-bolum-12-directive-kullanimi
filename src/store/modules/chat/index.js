import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  messages: ['10','20', '30'],
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
