import React, { FC } from 'react';
import { PrivateRouteComponentProps } from '../PrivateRoute';

interface ProfileProps extends PrivateRouteComponentProps {}

export const Profile: FC<ProfileProps> = ({ user }) => (
  <>
    <div>ユーザー名: {user.name}</div>
  </>
);
