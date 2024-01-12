import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spaceXApi = createApi({
  reducerPath: "spaceXApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/1/" }),
  endpoints: (builder) => ({
    getExampleEndpoint: builder.query({
      query: () => ({
        url: "example-launch-by-id",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExampleEndpointQuery } = spaceXApi;
