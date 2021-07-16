import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

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
  const location = useLocation();
  let isActive = false;

  const queryParams = queryString.parse(location.search);
  if (queryParams.category === category) {
    isActive = true;
  }
  queryParams.category = category;
  const parsedParams = queryString.stringify(queryParams);

  return (
    <li>
      <Link
        to={{
          pathname: href,
          search: parsedParams,
        }}
        className={classNames({ active: isActive })}
        title={name}
      >
        {children}
      </Link>
    </li>
  );
};
