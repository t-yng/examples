import React, { ComponentType, FC } from 'react';
import { navigate } from 'gatsby';
import { RouteComponentProps } from '@reach/router';
import { getUser, isLoggedIn } from '../services/auth';
import { User } from '../models/user';

export interface PrivateRouteComponentProps {
  user?: User;
};

interface PrivateRouteProps extends RouteComponentProps {
  component: ComponentType<PrivateRouteComponentProps>;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...others
}) => {
  if (!isLoggedIn()) {
    navigate('/app/login');
    return null;
  }

  const user = getUser();

  return <Component {...others} user={user} />;
};
