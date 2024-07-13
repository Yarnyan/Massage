import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithRedirect } from '../base';


export const reviewAPI = createApi({
  reducerPath: 'reviewAPI',
  baseQuery: baseQueryWithRedirect,
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (girlId = null) => {
        console.log(girlId)
        let url = 'girls/reviews/';
        if (girlId !== null) {
          url += `?girl_id=${girlId}`;
        }
        return {
          url,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetReviewsQuery } = reviewAPI;