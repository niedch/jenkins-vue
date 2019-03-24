const state = {
  value: 0
};

const getters = {
  valueGetter: state => {
    return state.value;
  }
};

/**
 * Mutations are the setters
 */
const mutations = {
  updateValue: (state, payload) => {
    state.value = payload;
  }
};

/**
 * actions are for async mutations
 * it 'commits' the change to the store only when the async operation is finished
 *
 * You basically execute some async operation and then you commit to mutations.
 */
const actions = {
  updateValue: (context, payload) => {
    context.commit('updateValue', payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};