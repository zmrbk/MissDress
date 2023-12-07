export enum TableTypes {
  USERS = 0,
  POPULAR_PRODUCTS = 1,
  ALL_PRODUCTS = 2,
  CART = 3,
}

export enum Status {
  PENDING = 0,
  ACTIVE = 1,
  DELETED = 2,
  BANNED = 3,
}

export enum ProceedStatus {
  ACTIVE = 1,
  PENDING = 2,
  PAID = 3,
}

export interface IAllStatus {
  [key: string]: string;
}

export interface TableStatsTypes {
  id: number;
  name: string;
  sales: string;
  income: string;
  productId?: string;
  status: string;
}
