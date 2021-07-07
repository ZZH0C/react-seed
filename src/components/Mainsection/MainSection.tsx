import React from 'react';
import { Submenu } from '../Submenu/Submenu';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <main className="container main">
      <Submenu>{children}</Submenu>
    </main>
  );
};
