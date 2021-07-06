import React from 'react';
import { NavbarElem } from './Navbar_elem/Navbarelem';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

export const Navbar: React.FC<NavbarProps> = () => {
  // variable to test
  const testArr = [
    { isActive: false, text: 'Menu item' },
    { isActive: false, text: 'Menu item' },
    { isActive: true, text: 'Menu item' },
    { isActive: false, text: 'Menu item' },
    { isActive: false, text: 'Menu item' },
  ];
  const navBarElems = testArr.map((elem) => {
    return (
      <NavbarElem
        key={Math.random()}
        isActive={elem.isActive}
        text={elem.text}
      />
    );
  });
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
          <ul className="nav navbar-nav">{navBarElems}</ul>
        </div>
      </div>
    </nav>
  );
};
