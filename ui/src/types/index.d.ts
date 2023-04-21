export interface IDataItem {
  countView: number,
  countPlay: number,
  countSend: number,
  countOrder: number,
  countPay: number,
  parentId: number,
  categoryId: number,
  nameId: null|number,
  id: number,
  title: string,
  viewSend: number,
  viewPay: number,
  children: Array<IDataItem>
}

export interface IState {
  count: number,
  items: Array<IDataItem>
}
