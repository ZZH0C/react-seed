import React from 'react';
import { MainSectionSubmenu } from '../MainSectionSubmenu/MainSectionSubmenu';
import { MainSectionSubmenuItem } from '../MainSectionSubmenu/MainSectionSubMenuItem/MainSectionSubmenuItem';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const testProps = [
    { name: 'subitem 1', href: 'index.html', active: false },
    { name: 'subitem 2', href: 'index.html', active: false },
    { name: 'subitem 3', href: 'index.html', active: false },
  ];
  const testPropsActive = [
    { name: 'subitem 1', href: 'index.html', active: false },
    { name: 'subitem 2', href: 'index.html', active: true },
    { name: 'subitem 3', href: 'index.html', active: false },
  ];
  return (
    <main className="container main">
      <MainSectionSubmenu>
        <MainSectionSubmenuItem name={'Item 1'} content={testProps} />
        <MainSectionSubmenuItem name={'Item 2'} content={testPropsActive} />
        <MainSectionSubmenuItem name={'Item 3'} content={testProps} />
        <MainSectionSubmenuItem name={'Item 4'} content={testProps} />
        <MainSectionSubmenuItem name={'Item 5'} content={testProps} />
      </MainSectionSubmenu>
    </main>
  );
};
