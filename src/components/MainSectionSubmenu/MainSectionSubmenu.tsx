import React from 'react';
import { MainSectionSubmenuItem } from './MainSectionSubMenuItem/MainSectionSubmenuItem';
type MainSectionSubmenuProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionSubmenu: React.FC<MainSectionSubmenuProps> = () => {
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
    <aside className="submenu">
      <MainSectionSubmenuItem name={'Item 1'} content={testProps} />
      <MainSectionSubmenuItem name={'Item 2'} content={testPropsActive} />
      <MainSectionSubmenuItem name={'Item 3'} content={testProps} />
      <MainSectionSubmenuItem name={'Item 4'} content={testProps} />
      <MainSectionSubmenuItem name={'Item 5'} content={testProps} />
    </aside>
  );
};
