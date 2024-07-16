import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { banUser } from '../users/users.slice';
import { getAppState } from '../../../helpers/appState';

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL, 
  prepareHeaders: (headers) => {
    const currentUser = getAppState("current-user");
    if (currentUser) {
      headers.set("x-user-uuid", currentUser.slug);
    }
    return headers;
  },
});

export const baseQueryWithRedirect = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 403) {
    api.dispatch(banUser());
  };
  return result;
};
