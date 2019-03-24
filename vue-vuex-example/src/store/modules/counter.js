import * as types from '../types';

const state = {
  counter: 0
};


/**
 * We can also move these objects to separate files lets say:
 * getters.js
 * mutations.js
 *
 * and import them here and add them to these objects
 */
const getters = {
  /** we use the es6 syntax to convert the variable to string to achieve namespacing */
  [types.doubleCounter]: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks';
  }
};

/**
 * Mutations are the setters
 */
const mutations = {
  increment: state => {
    state.counter++;
  },
  decrement: state => {
    state.counter--;
  },
  incrementWithPayload: (state, payload) => {
    state.counter += payload.by;
  },
  decrementWithPayload: (state, payload) => {
    state.counter -= payload.by;
  }
};

/**
 * actions are for async mutations
 * it 'commits' the change to the store only when the async operation is finished
 *
 * You basically execute some async operation and then you commit to mutations.
 */
const actions = {
  asyncIncrement: context => {
    setTimeout(() => {
      context.commit('increment');
    }, 1000);
  },
  asyncDecrement: context => {
    setTimeout(() => {
      context.commit('decrement');
    }, 1000);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
