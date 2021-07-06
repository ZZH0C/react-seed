import React from 'react';

type HeaderLogoProps = React.HTMLAttributes<HTMLElement>;

export const HeaderLogo: React.FC<HeaderLogoProps> = () => {
  return (
    <div className="logoBlock">
      <a href="index.html">
        <img alt="1" src="images/logotype.png" className="logo" title="Logo" />
        <img alt="2" src="images/logotypeMobile.png" className="logoMobile" />
      </a>
      <span>Page title</span>
    </div>
  );
};
