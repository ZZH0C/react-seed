import React from 'react';

interface HeaderLogoProps extends React.HTMLAttributes<HTMLElement> {
  desktopImgSrc?: string;
  mobileImgSrc?: string;
  desktopImgAlt?: string;
  mobileImgAlc?: string;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  desktopImgAlt,
  desktopImgSrc,
  mobileImgSrc,
  mobileImgAlc,
  children,
}) => {
  return (
    <div className="logoBlock">
      <a href="/">
        <img
          alt={desktopImgAlt}
          src={desktopImgSrc}
          className="logo"
          title="Logo"
        />
        <img alt={mobileImgAlc} src={mobileImgSrc} className="logoMobile" />
      </a>
      <span>{children}</span>
    </div>
  );
};
