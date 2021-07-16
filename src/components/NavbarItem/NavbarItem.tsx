import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';

interface NavbarElemProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  name: string;
  label: string;
}

export const NavbarItem: React.FC<NavbarElemProps> = ({
  href,
  name,
  label,
  children,
}) => {
  const location = useLocation();
  let isActive = false;
  const queryParams = queryString.parse(location.search);
  if (queryParams.label === label) {
    isActive = true;
  }
  queryParams.label = label;
  const parsedParams = queryString.stringify(queryParams);

  return (
    <li>
      <Link
        to={{
          pathname: href,
          search: parsedParams,
        }}
        title={name}
        className={classNames('', { active: isActive })}
      >
        {children}
      </Link>
    </li>
  );
};
