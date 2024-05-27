import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { env } from "../config";

const baseQuery = fetchBaseQuery({
  baseUrl: env.apiEndPoint,
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["rapidApi"],

  endpoints: () => ({}),
});
