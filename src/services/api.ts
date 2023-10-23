import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3/movie",
 
  prepareHeaders: headers => {
    headers.set('accept', 'application/json',)
    headers.set('Authorization','Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q3YzcxZmRlM2ZlMWY3YTAzN2FkZWU2ZjMxMDZkNyIsInN1YiI6IjY1MmFlOGQ0ZWE4NGM3MDBhZWYyODVlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SxdQUV3Jho-qr8HoYGwY-Rw0-AK0JzR7rJ5z6iqRoOY')
    return headers
  }
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
