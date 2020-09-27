import React from 'react';
import { Link, navigate } from 'gatsby';
import { isLoggedIn, logout } from '../services/auth';

export const NavBar = () => {
  const handleClickLogout = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    logout();
    navigate('/app/login');
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #666',
      }}
    >
      <span>gatsby-auth</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a href="/" onClick={handleClickLogout}>
            Logout
          </a>
        ) : (
          <Link to="/app/login">Login</Link>
        )}
      </nav>
    </div>
  );
};
