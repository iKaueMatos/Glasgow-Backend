export interface IResponse {
  user: {
    name: string;
    email: string;
  };
  status: number;
  token: string;
  refresh_token: string;
  error: string;
  data?: any;
}
