import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://play-zone-backend.vercel.app/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

// import { axiosBaseQuery } from '@/helpers/axios/axiosBaseQuery'
// import { getBaseUrl } from '@/helpers/config/envConfig'
// import { createApi } from '@reduxjs/toolkit/query/react'
// import { tagTypesList } from '../tag-types'

// // Define a service using a base URL and expected endpoints
// export const baseApi = createApi({
//   reducerPath: 'api',
//   baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
//     endpoints: () => ({}),
//   tagTypes: tagTypesList
// })
