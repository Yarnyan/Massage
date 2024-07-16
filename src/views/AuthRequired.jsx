import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useAuthorizeQuery } from '../store/reducers/users/users.actions';
import { setCurrentUser } from '../store/reducers/users/users.slice';

import Loader from '../components/loader/Loader';
import ErrorPage from '../pages/error.page';

const IsNotBanned = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, data } = useAuthorizeQuery();
  const { is_banned } = useSelector(state => state.users);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setCurrentUser(data));
    }
  }, [isSuccess, data, dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  if (!isSuccess) {
    return <ErrorPage code={500} />;
  }
  if (is_banned) {
    return <ErrorPage code={403} />;
  }

  return children;
};

export default IsNotBanned;
