import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';

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
  const { changeParams } = useQueryParams();
  const { parsedParams, isActive } = changeParams(label, 'category');
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
