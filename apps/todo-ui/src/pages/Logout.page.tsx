import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserApi } from '../services/user.api.service';

export const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    UserApi.logout();
    navigate("/login", { replace: true });
  }, []);

  return (<></>);
};
