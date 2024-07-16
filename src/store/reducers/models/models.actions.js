import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRedirect } from '../base';
import { setModels } from './models.slice';

export const modelAPI = createApi({
  reducerPath: 'modelAPI',
  baseQuery: baseQueryWithRedirect,
  endpoints: (builder) => ({
    getModels: builder.query({
      query: () => ({
        url: 'girls/',
        method: 'GET',
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setModels(data.girls.items)); 
        } catch (err) {
          // Handle error if needed
        }
      },
    }),
  }),
});

export const { useGetModelsQuery } = modelAPI;
