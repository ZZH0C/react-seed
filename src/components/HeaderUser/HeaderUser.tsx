import React from 'react';
import { HeaderUserIcons } from '../HeaderUserIcons/HeaderUserIcons';
interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}

export const HeaderUser: React.FC<HeaderUserProps> = ({ src, alt }) => {
  return (
    <div className="header-comp pull-right">
      <HeaderUserIcons style={'headerIcon icon-bell'} />
      <HeaderUserIcons style={'headerIcon icon-mail'} />
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
