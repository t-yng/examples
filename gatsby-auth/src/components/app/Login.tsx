import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { navigate } from 'gatsby';
import { isLoggedIn, login } from '../../services/auth';

interface LoginProps extends RouteComponentProps {}

export const Login: FC<LoginProps> = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const success = login(user.username, user.password);
    if (success) {
      navigate('/app/profile');
    } else {
      alert('ログインに失敗しました');
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: 'block' }}>ユーザー名</label>
        <input id="username" name="username" onChange={handleUpdate} />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: 'block' }}>パスワード</label>
        <input id="password" name="password" onChange={handleUpdate} />
      </div>
      <button
        type="submit"
        style={{ backgroundColor: '#2e43ff', color: 'white', border: 'none' }}
      >
        ログイン
      </button>
    </form>
  );
};
