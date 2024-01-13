import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Launch, Nationalities, PayloadesWithLaunches } from "../types";

export const spaceXApi = createApi({
  reducerPath: "spaceXApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4" }),
  endpoints: (builder) => ({
    payloadsNationalities: builder.query<Nationalities, void>({
      query: () => ({
        url: "/payloads/query",
        method: "POST",
        body: {
          options: {
            select: "nationalities",
            pagination: false,
          },
        },
      }),
    }),
    launchesForPayloads: builder.query<
      PayloadesWithLaunches,
      { nationality: string; pageCount: number }
    >({
      query: ({ nationality, pageCount }) => ({
        url: "/payloads/query",
        method: "POST",
        body: {
          query: {
            nationalities: nationality,
          },
          options: {
            select: {
              name: 1,
              nationalities: 1,
            },
            populate: [
              {
                path: "launch",
              },
            ],
            page: pageCount,
            limit: 8,
          },
        },
      }),
    }),
    launche: builder.query<Launch, { id: string }>({
      query: ({ id }) => ({
        url: `/launches/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePayloadsNationalitiesQuery,
  useLaunchesForPayloadsQuery,
  useLauncheQuery,
} = spaceXApi;
