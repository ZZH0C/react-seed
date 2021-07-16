import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { useChangeSearchParams } from '../../hooks/useChangeSearchParams';

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
  const { changeCategory } = useChangeSearchParams();
  const params = changeCategory(label, location, 'label');
  return (
    <li>
      <Link
        to={{
          pathname: href,
          search: params.parsedParams,
        }}
        title={name}
        className={classNames('', { active: params.isActive })}
      >
        {children}
      </Link>
    </li>
  );
};
