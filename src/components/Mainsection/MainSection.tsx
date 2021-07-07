import React from 'react';
import { MainSectionSubmenu } from '../MainSectionSubmenu/MainSectionSubmenu';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <main className="container main">
      <MainSectionSubmenu />
    </main>
  );
};
