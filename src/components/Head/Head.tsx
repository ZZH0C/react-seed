import React from 'react';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderUser } from '../HeaderUser/HeaderUser';

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
