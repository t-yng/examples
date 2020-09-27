import React from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);