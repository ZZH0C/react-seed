import React from 'react';
import classNames from 'classnames';

interface NavbarElemProps extends React.HTMLAttributes<HTMLElement> {
  isActive: true | false;
}

export const NavbarItem: React.FC<NavbarElemProps> = ({
  isActive,
  children,
}) => {
  return (
    <li>
      <a
        href="index.html"
        title="Menu item"
        className={classNames('', { active: isActive })}
      >
        {children}
      </a>
    </li>
  );
};
