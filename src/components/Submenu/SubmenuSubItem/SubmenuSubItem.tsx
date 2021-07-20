import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
  const { changeParamsCallback } = useQueryParams();
  const params = changeParamsCallback(category, 'in');
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
