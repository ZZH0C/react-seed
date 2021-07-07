import React from 'react';
type MainSectionSubmenuProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionSubmenu: React.FC<MainSectionSubmenuProps> = ({
  children,
}) => {
  return <aside className="submenu">{children}</aside>;
};
