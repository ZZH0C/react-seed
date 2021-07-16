import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useQueryParams } from '../../../hooks/useQueryParams';

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
  const { changeParams } = useQueryParams();
  const params = changeParams(category, location, 'category');
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
