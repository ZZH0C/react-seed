import React, { useContext } from 'react';
import { UserContext } from '../../pages/HomePage/HomePage';

interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}

const emptyProfilePictureSrc =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

export const HeaderUser: React.FC<HeaderUserProps> = ({ children }) => {
  const userData = useContext(UserContext);

  const profile = {
    name: '',
    iconSrc: emptyProfilePictureSrc,
  };
  if (userData) {
    if ('profileObj' in userData) {
      profile.name = userData.profileObj.name;
      profile.iconSrc = userData.profileObj.imageUrl;
    }
  }

  return (
    <div className="header-comp pull-right">
      {children}
      <a href="/" className="profile">
        <span>{profile.name}</span>
        <img alt={'userPick'} src={profile.iconSrc} />
      </a>
      <a href="/" className="btn btn-xs btn-header">
        <i className="headerIcon icon-search" />
      </a>
    </div>
  );
};
