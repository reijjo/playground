export type LoginRegisterForm = {
  username: string;
  password: string;
};

export interface BasicApiResponse {
  success: boolean;
  message: string;
}

export interface SessionApiResponse {
  success: boolean;
  data: User | null;
}

export interface User {
  _id: string;
  username: string;
  role: string;
}
