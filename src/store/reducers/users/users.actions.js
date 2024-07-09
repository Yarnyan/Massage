import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRedirect } from '../base';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: baseQueryWithRedirect,
  endpoints: (builder) => ({
    authorize: builder.query({
      query: () => ({
        url: 'clients/',
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }),
    }),
  }),
});

export const {useAuthorizeQuery} = userAPI;