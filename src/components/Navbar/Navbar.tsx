import React from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const { pathname } = useLocation();
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
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li>
              <Link
                to={{
                  pathname,
                  search: '',
                }}
              >
                Clear Search
              </Link>
            </li>
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};
