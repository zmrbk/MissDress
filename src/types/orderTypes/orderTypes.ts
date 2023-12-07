export interface Image {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  name: string;
  fileKey: string;
  contentSize: number;
  contentType: string;
  url: string;
}

export interface Product2 {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount?: any;
  images: Image[];
}

export interface Product {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  totalCount: number;
  amount: number;
  product: Product2;
}

export interface Orders {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  amount: number;
  price: number;
  proceedStatus: number;
  products: Product[];
}
