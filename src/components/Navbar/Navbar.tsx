import React from 'react';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
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
          <ul className="nav navbar-nav">{children}</ul>
        </div>
      </div>
    </nav>
  );
};
