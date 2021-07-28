import React from 'react';

import { MainSection } from '../../components/MainSection/MainSection';
import { useUserContext } from '../../hooks/useUserContext/useUserContext';

import { Main } from '../../components/Main/Main';
export const UserContext = useUserContext;
export const HomePage: React.FC = () => {
  return (
    <Main>
      <MainSection />
    </Main>
  );
};
