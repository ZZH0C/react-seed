import React from 'react';
import { MainSectionSubmenu } from './Mainsection_submenu/MainSectionSubmenu';
import { MainSectionContent } from './Mainsection_content/MainSectionContent';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  return (
    <main className="container main">
      <MainSectionSubmenu />
      <MainSectionContent />
    </main>
  );
};
