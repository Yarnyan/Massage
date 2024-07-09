import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ban } from '../users/users.slice';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL, //import.meta.env.VITE_BACKEND_UR
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithRedirect = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    api.dispatch(ban());
  };
  return result;
};
