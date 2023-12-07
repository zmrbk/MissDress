export interface IOrderFormValues {
  firstName: string;
  phoneNumber: string;
  cityId: string;
  lastName: string;
  countryId: string;
}

export interface Product {
  id: number;
  createDate: string;
  updateDate: string;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount: null;
}

export interface Products {
  id: number;
  status: number;
  createDate: string;
  updateDate: string;
  totalCount: number;
  amount: number;
  product: Product;
}

export interface ICart {
  result?: {
    id: number;
    status: number;
    createDate: string;
    updateDate: string;
    amount: number;
    price: number;
    proceedStatus: number;
    products: Products[];
  };
}
