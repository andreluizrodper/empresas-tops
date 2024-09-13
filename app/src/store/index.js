import { createStore } from "vuex";

export default createStore({
  state: {
    data: {},
  },
  mutations: {
    setData(state, data) {
      state.data = { ...data, ...state.data };
    },
  },
});
