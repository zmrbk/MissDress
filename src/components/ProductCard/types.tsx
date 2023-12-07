type Collection = {
  createDate: string;
  id: number;
  productId: number;
  status: number;
  type: string;
  updateDate: string;
};

type Category = {
  createDate: string;
  id: number;
  status: number;
  title: string;
  updateDate: string;
};

export interface Images {
  contentSize: number;
  contentType: string;
  createDate: string;
  fileKey: string;
  id: number;
  name: string;
  status: number;
  updateDate: string;
  url: string;
}

export interface IItemCard {
  amount: number;
  article: string;
  category?: Category;
  collections?: Collection[];
  createDate: string;
  description: string;
  discount: number | null;
  id: number;
  images?: Images[];
  price: number;
  rate: number;
  status: number;
  title: string;
  updateDate: string;
}

export interface IProductCard {
  item: IItemCard;
  btnTitle: string;
}
