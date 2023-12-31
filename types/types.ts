export interface IUserData {
  fname?: string;
  lname?: string;
  phoneNumber?: string;
  username: string;
  password: string;
  email: string;
}
export interface IUserVerified {
  isVerified: boolean;
}
export interface Icategory {
  name: string;
}

export interface IBlog {
  title: string;
  description: string;
  imageUrl?: string;
  categoryId?: number;
  thumbImageUrl?: string;
}
