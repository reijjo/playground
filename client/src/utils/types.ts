export type LoginRegisterForm = {
  username: string;
  password: string;
};

export interface BasicApiResponse {
  success: boolean;
  message: string;
}
