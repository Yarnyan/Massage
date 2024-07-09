import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthorizeQuery } from '../store/reducers/users/users.actions';
import { setAppState } from '../helpers/appState';
import Loader from '../components/loader/Loader';

const IsNotBanned = ({ children }) => {
  const navigate = useNavigate();
  const {isLoading, isSuccess, data} = useAuthorizeQuery();
  const {is_banned} = useSelector(state => state.users);
  useEffect(() => {
    if (is_banned) {
      navigate("/403");
    }
  }, [navigate, is_banned]);

  if (isLoading) {
    // TODO: Сделать тут Preloader
    return <Loader />
  }
  if (isSuccess) {
    setAppState("current-user", data);
    setAppState("is_authorised", true);
  }

  return children;
};

export default IsNotBanned;