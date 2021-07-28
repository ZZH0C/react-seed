import React from 'react';

import { MainSection } from '../../components/MainSection/MainSection';
import { useUserContext } from '../../hooks/useUserContext/useUserContext';

export const UserContext = useUserContext;
export const HomePage: React.FC = () => {
  return <MainSection />;
};
