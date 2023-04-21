import getData from '@/api';
import { IState } from '@/types/index.d';
import { ActionContext, createStore } from 'vuex';

export default createStore<IState>({
  state: {
    items: [],
    count: 0,
  },
  getters: {},
  mutations: {
    setData(state: IState, data: IState) {
      state.items = data.items;
      state.count = data.count;
    },
  },
  actions: {
    async loadData({ commit }: ActionContext<IState, object>): Promise<void> {
      const result = await getData();
      commit('setData', result);
    },
  },
  modules: {},
});
