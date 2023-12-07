export interface IProduct {
  id: number;
  status: number;
  createDate: Date | string;
  updateDate: Date | string;
  title: string;
  description: string;
  price: number;
  amount: number;
  article: string;
  rate: number;
  discount?: any;
  images: any[];
}

export interface IProductsStat {
  id: number;
  status: number;
  createDate: Date | string;
  updateDate: Date | string;
  productId: number;
  allTotalCount: number;
  allAmount: number;
  product: IProduct;
}

export interface IPopularProduct {
  product_title: string;
  amount: string;
  totalCount: string;
}

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
