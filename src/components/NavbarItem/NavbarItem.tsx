import React from 'react';
import classNames from 'classnames';

interface NavbarElemProps extends React.HTMLAttributes<HTMLElement> {
  isActive: boolean;
  url?: string;
}

export const NavbarItem: React.FC<NavbarElemProps> = ({
  isActive,
  url,
  children,
}) => {
  return (
    <li>
      <a
        href={url}
        title="Menu item"
        className={classNames('', { active: isActive })}
      >
        {children}
      </a>
    </li>
  );
};
