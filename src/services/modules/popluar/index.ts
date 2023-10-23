import { api } from '@/services/api'
export const getPopluarmovieApi = api.injectEndpoints({
  endpoints: builder => ({
    getPopluarmovieApi: builder.query({
      query: () => '/popular',
    }),
  }),
})

export const { useGetPopluarmovieApiQuery } = getPopluarmovieApi