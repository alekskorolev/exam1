import { States } from "@/components/Grid/constants"

export interface IItemValues {
  countView: number,
  countPlay: number,
  countSend: number,
  countOrder: number,
  countPay: number,
  viewSend: number,
  viewPay: number,
}

export interface IDataItem extends IItemValues {
  parentId: number,
  categoryId: number,
  nameId: null|number,
  id: number,
  title: string,
  children: Array<IDataItem>
}

export interface ISortOptions {
  field: string,
  order: States
}

export interface IDataResult {
  count: number,
  items: Array<IDataItem>,
}

export interface IState extends IDataResult {
  sort: ISortOptions,
  summ: IItemValues,
}
