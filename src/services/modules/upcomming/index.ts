import { api } from '@/services/api'
export const getUpcomingmovieApi = api.injectEndpoints({
  endpoints: builder => ({
    getUpcomingmovieApi: builder.query({
      query: () => '/upcoming',
    }),
  }),
})

export const { useGetUpcomingmovieApiQuery } = getUpcomingmovieApi
