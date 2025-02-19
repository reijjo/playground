import {
  BasicApiResponse,
  LoginRegisterForm,
  SessionApiResponse,
} from "../../utils/types";
import { baseApi } from "./baseApi";

export const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<BasicApiResponse, LoginRegisterForm>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<BasicApiResponse, LoginRegisterForm>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation<BasicApiResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getSessionUser: builder.query<SessionApiResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetSessionUserQuery,
} = authApiSlice;
