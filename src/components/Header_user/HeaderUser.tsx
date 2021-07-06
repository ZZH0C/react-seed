import React from 'react';
import { HeaderUserIcons } from '../Header_user_icons/HeaderUserIcons';
type HeaderUserProps = React.HTMLAttributes<HTMLElement>;

export const HeaderUser: React.FC<HeaderUserProps> = () => {
  return (
    <div className="header-comp pull-right">
      <HeaderUserIcons style={'headerIcon icon-bell'} />
      <HeaderUserIcons style={'headerIcon icon-mail'} />
      <a href="./index.html" className="profile">
        <span>User name</span>
        <img alt={'Search icon'} src="images/profilePhoto.png" />
      </a>
      <a href="./index.html" className="btn btn-xs btn-header">
        <i className="headerIcon icon-search" />
      </a>
    </div>
  );
};
