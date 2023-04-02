import { api } from './base.api'
import jwt_decode from "jwt-decode";
import { useLocalStorage } from '../hooks/localstorage';

interface JWTPayload { sub: string, exp: number, ait: number }

export const UserApi = {
  login: async (email: string, password: string) => {
    const response = await api().request({
      url: "auth/login",
      method: "POST",
      data: {
        email,
        password,
      }
    })

    const token = response.data.access_token;

    if (token) {
      localStorage.setItem('user', JSON.stringify(jwt_decode(token)));
      localStorage.setItem('token', token);
      window.dispatchEvent(new Event("storage"));
    }

    return response.data
  },

  register: async (email: string, password: string, name: string) => {
    await api().request({
      url: "auth/reg",
      method: "POST",
      data: {
        email,
        password,
        name,
      }
    }).catch((e) => {
      throw e;
    })

    return UserApi.login(email, password);
  },

  logout: async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    window.dispatchEvent(new Event("storage"));
  },

  isAuthenticated: () => {
    let isValid = true;
    const token = localStorage.getItem('token');

    if (!token) {
      isValid = false;
    } else {
      const decodedToken: JWTPayload = jwt_decode(token);
      const dateNow = Math.floor((new Date).getTime() / 1000);
      if (decodedToken.exp < dateNow) {
        isValid = false;
      }
    }

    return isValid;
  }
}

