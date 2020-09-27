import { User } from '../models/user';

export const login = (username: string, password: string) => {
  if (username === 'taro' && password === 'password') {
    setUser({ name: username, password });
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  sessionStorage.removeItem('user');
};

export const getUser = (): User | undefined => {
  const user = sessionStorage.getItem('user');
  return user != null ? JSON.parse(user) : undefined;
};

export const isLoggedIn = () => {
  const user = getUser();
  return user != null;
};

const setUser = (user: User) => {
  sessionStorage.setItem('user', JSON.stringify(user));
};
