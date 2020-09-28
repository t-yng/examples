import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from '@emotion/styled';
import { WalkCatLogo } from '../WalkCatLogo';

interface HomeProps extends RouteComponentProps {}

const borderRadius = 42;

const StyledWalkCatLogo = styled(WalkCatLogo)({
  marginBottom: 30,
});

const HomeBlock = styled('div')({
  width: '100%',
});

const HomeBlockTop = styled('div')({
  background: 'black',
  borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
  color: '#fff',
  paddingLeft: '6.75rem',
  paddingTop: '7.25rem',
  width: '100%',
  height: 538,
});

const HomeBlockBottom = styled('div')({
  background: '#E3E1DC',
  borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
  width: '100%',
  height: 670,
});

export const Home: FC<HomeProps> = () => (
  <>
    <StyledWalkCatLogo />
    <HomeBlock>
      <HomeBlockTop />
      <HomeBlockBottom />
    </HomeBlock>
  </>
);
