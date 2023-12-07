export interface IUser {
  user_id: number;
  user_status?: number;
  user_first_name: string;
  user_last_name: string;
  user_phone_number?: string;
  price: string;
  amount: string;
}
export interface IUserMe {
  id: number;
  status: number;
  createDate: Date;
  updateDate: Date;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: string;
}
