import React from 'react';
interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}

export const HeaderUser: React.FC<HeaderUserProps> = ({
  src,
  alt,
  children,
}) => {
  return (
    <div className="header-comp pull-right">
      {children}
      <a href="./index.html" className="profile">
        <span>User name</span>
        <img alt={alt} src={src} />
      </a>
      <a href="./index.html" className="btn btn-xs btn-header">
        <i className="headerIcon icon-search" />
      </a>
    </div>
  );
};
