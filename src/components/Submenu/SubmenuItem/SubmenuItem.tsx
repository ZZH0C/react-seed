import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQueryParams } from '../../../hooks/useQueryParams/useQueryParams';
import styles from './SubmenuItem.module.scss';
import classNames from 'classnames';

interface MainSectionSubmenuItemProps
  extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export const SubmenuItem: React.FC<MainSectionSubmenuItemProps> = ({
  name,
  children,
}) => {
  const { pathname } = useLocation();
  const { removeParam } = useQueryParams();
  const clearParams = removeParam('in');
  return (
    <section className="submenuSection">
      <h4 className="submenuCategory">{name}</h4>
      <ul className="nav">
        <li>
          <Link
            className={classNames(styles.reset_button)}
            to={{
              pathname,
              search: clearParams,
            }}
          >
            Reset Category
          </Link>
        </li>
        {children}
      </ul>
    </section>
  );
};
