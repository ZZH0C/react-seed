import React from 'react';
type MainSectionContentFooterProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionContentFooter: React.FC<MainSectionContentFooterProps> =
  () => {
    return (
      <footer className="footer">
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li>
              <a href="#" title="menu">
                About
              </a>
            </li>
            <li>
              <a href="#" title="menu">
                Policies
              </a>
            </li>
            <li>
              <a href="#" title="menu">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" title="menu">
                Help
              </a>
            </li>
            <li>
              <a href="#" title="menu">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="rights clearfix">
          <img src="images/logotype2.png" className="pull-left" />
          <p>©2015. Qulix Systems. All rights reserved.</p>
        </div>
      </footer>
    );
  };
