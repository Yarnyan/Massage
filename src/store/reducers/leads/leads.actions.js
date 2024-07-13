import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRedirect } from '../base';

export const leadAPI = createApi({
  reducerPath: 'leadAPI',
  baseQuery: baseQueryWithRedirect,
  endpoints: (builder) => ({
    createLead: builder.mutation({
      query: (data) => {
        return {
          url: "girls/requests/",
          method: 'POST',
          body: data
        };
      },
    }),
  }),
});

export const {useCreateLeadMutation} = leadAPI;