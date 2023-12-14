import { IAddress, IUser } from "./auth.types";

export interface IProfile {
  id: number;
  username: string;
  avatar: string;
  email: string;
  address: {
    id: number;
    street_address: string;
    city: string;
    postal_code: string;
    country: string;
    phone_number: string;
    district_name: string;
  };
}
