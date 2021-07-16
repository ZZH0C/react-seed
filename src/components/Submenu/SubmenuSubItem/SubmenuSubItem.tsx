import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useChangeSearchParams } from '../../../hooks/useChangeSearchParams';

interface SubmenuSubItemProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  name: string;
  category: string;
}

export const SubmenuSubItem: React.FC<SubmenuSubItemProps> = ({
  href,
  name,
  category,
  children,
}) => {
  const location = useLocation();
  const { changeCategory } = useChangeSearchParams();
  const params = changeCategory(category, location, 'category');
  return (
    <li>
      <Link
        to={{
          pathname: href,
          search: params.parsedParams,
        }}
        className={classNames({ active: params.isActive })}
        title={name}
      >
        {children}
      </Link>
    </li>
  );
};
