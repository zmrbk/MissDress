export interface IFavorite {
  id: number;
  img: string;
  oldPrice: string;
  newPrice: string;
  title: string;
  colors: object;
  size: string;
  stars: Array<string>;
  heart: string;
  isFav: boolean;
}
