import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Launch,
  LaunchPad,
  Nationalities,
  PayloadesWithLaunches,
} from "../types";

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
      { nationality: string; pageCount: number; pagination?: boolean }
    >({
      query: ({ nationality, pageCount, pagination }) => ({
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
            pagination: pagination ?? true,
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
    launchpad: builder.query<LaunchPad, { id: string }>({
      query: ({ id }) => ({
        url: `/launchpads/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  usePayloadsNationalitiesQuery,
  useLaunchesForPayloadsQuery,
  useLauncheQuery,
  useLaunchpadQuery,
} = spaceXApi;
