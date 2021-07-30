import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';
import styles from './Navbar.module.scss';
import classNames from 'classnames';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { removeParam } = useQueryParams();
  const clearParams = removeParam('category');
  return (
    <nav className="navbar navbar-default navbar-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <Link
                className={classNames(styles.reset_button)}
                to={{
                  pathname,
                  search: clearParams,
                }}
              >
                Reset Label
              </Link>
            </li>
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};
