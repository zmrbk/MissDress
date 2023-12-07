export interface user {
  createDate: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  role: string;
  status: number;
  updateDate: string;
}

export interface country {
  createDate: string;
  id: number;
  status: number;
  title: string;
  updateDate: string;
}

export type city = country;
