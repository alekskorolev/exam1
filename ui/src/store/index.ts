import getData from '@/api';
import { States } from '@/components/Grid/constants';
import { IDataItem, IItemValues, IState } from '@/types/index.d';
import { ActionContext, createStore } from 'vuex';

class Summ implements IItemValues {
  countView = 0;

  countPlay = 0;

  countSend = 0;

  countOrder = 0;

  countPay = 0;

  viewSend = 0;

  viewPay = 0;
}

function sortItems<DataItemKey extends keyof IDataItem>(
  items: Array<IDataItem>,
  field = '',
  order = States.empty,
): Array<IDataItem> {
  return items.map((item: IDataItem): IDataItem => {
    if (!item.children || item.children.length < 2) {
      return item;
    }
    const children = sortItems(item.children, field, order);
    return { ...item, children };
  }).sort((a: IDataItem, b: IDataItem) => {
    const valA: number = a[field as DataItemKey] as number;
    const valB: number = b[field as DataItemKey] as number;
    const delta = valB - valA;
    return delta * order;
  });
}

export default createStore<IState>({
  state: {
    items: [],
    count: 0,
    sort: {
      field: 'countView',
      order: States.asc,
    },
    summ: new Summ(),
  },
  getters: {
    sorted(state: IState): Array<IDataItem> {
      if (!state.sort) {
        return state.items;
      }
      const { field, order } = state.sort;
      if (order === States.empty) {
        return state.items;
      }
      return sortItems(state.items, field, order);
    },
  },
  mutations: {
    setData(state: IState, data: IState) {
      state.items = data.items;
      state.count = data.count;
    },
    setSumm<DataItemKey extends keyof IItemValues>(state: IState) {
      const summ = new Summ();
      state.items.forEach((item: IItemValues) => {
        Object.keys(summ).forEach((field) => {
          summ[field as DataItemKey] += item[field as DataItemKey];
        });
      });
      state.summ = summ;
    },
    toogleSort(state: IState, field: string) {
      if (state.sort?.field === field) {
        state.sort.order += 1;
        if (state.sort.order > 1) {
          state.sort.order = -1;
        }
      } else {
        state.sort = { field, order: States.asc };
      }
    },
  },
  actions: {
    async loadData({ commit }: ActionContext<IState, object>): Promise<void> {
      const result = await getData();
      commit('setData', result);
      commit('setSumm', result.items);
    },
  },
  modules: {},
});
