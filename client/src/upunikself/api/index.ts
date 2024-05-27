import { api } from "../../rtk";
import * as ApiTypes from "./type";

const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiTypes.LoginResponse, ApiTypes.LoginRequest>({
      query: ({ data }) => ({
        url: `/hidden-route/admin/login`,
        method: `POST`,
        body: { data },
      }),
    }),

    register: builder.mutation<
      ApiTypes.RegisterResponse,
      ApiTypes.RegisterRequest
    >({
      query: ({ data }) => ({
        url: `/hidden-route/admin/register`,
        method: `POST`,
        body: { data },
      }),
    }),

    addToWaitList: builder.mutation<
      ApiTypes.AddToWaitListResponse,
      ApiTypes.AddToWaitListRequest
    >({
      query: ({ data }) => ({
        url: `/wait-list/add`,
        method: `POST`,
        body: { data },
      }),
    }),

    getWaitList: builder.query<
      ApiTypes.GetWaitListResponse,
      ApiTypes.GetWaitListRequest
    >({
      query: () => ({
        url: `/wait-list/get`,
        method: `GET`,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useAddToWaitListMutation,
  useGetWaitListQuery,
} = adminApi;
