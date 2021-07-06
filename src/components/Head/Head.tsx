import React from 'react';
import { HeaderLogo } from '../Header_logo/HeaderLogo';
import { HeaderUser } from '../Header_user/HeaderUser';

type HeadProps = React.HTMLAttributes<HTMLElement>;

export const Head: React.FC<HeadProps> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logoBlock">
            <HeaderLogo />
          </div>
          <HeaderUser />
        </div>
      </div>
    </header>
  );
};
