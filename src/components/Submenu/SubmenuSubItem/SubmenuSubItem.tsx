import React from 'react';
import classNames from 'classnames';

interface SubmenuSubItemProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  name: string;
  isActive?: boolean;
}

export const SubmenuSubItem: React.FC<SubmenuSubItemProps> = ({
  href,
  name,
  isActive,
  children,
}) => {
  return (
    <li>
      <a
        href={href}
        title={name}
        className={classNames('', { active: isActive })}
      >
        {children}
      </a>
    </li>
  );
};
