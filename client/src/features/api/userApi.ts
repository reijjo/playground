import { User } from "../../utils/types";
import { baseApi } from "./baseApi";

export const userApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = userApiSlice;
