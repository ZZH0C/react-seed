import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

interface SubmenuSubItemProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  name: string;
  category: string;
  // isActive?: boolean;
}

export const SubmenuSubItem: React.FC<SubmenuSubItemProps> = ({
  href,
  name,
  category,
  children,
}) => {
  const location = useLocation<{ category: string }>();
  let isActive = false;
  if (location.search === `?${category}`) {
    // console.log(location.search);
    isActive = true;
  }
  return (
    <li>
      <Link
        to={{
          pathname: href,
          search: category,
        }}
        className={classNames({ active: isActive })}
        title={name}
      >
        {children}
      </Link>
    </li>
  );
};
