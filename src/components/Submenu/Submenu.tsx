import React from 'react';
type MainSectionSubmenuProps = React.HTMLAttributes<HTMLElement>;

export const Submenu: React.FC<MainSectionSubmenuProps> = ({ children }) => {
  return <aside className="submenu">{children}</aside>;
};
