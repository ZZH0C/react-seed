import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../pages/HomePage/HomePage';

interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}

export const HeaderUser: React.FC<HeaderUserProps> = ({ children }) => {
  const userData = useContext(UserContext);
  const emptyProfilePictureSrc =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  const [profileData, setProfileSrc] = useState({
    name: '',
    iconSrc: emptyProfilePictureSrc,
  });

  useEffect(() => {
    if (!userData) {
      setProfileSrc({
        name: '',
        iconSrc: emptyProfilePictureSrc,
      });
    }
    if (userData && 'profileObj' in userData) {
      setProfileSrc({
        iconSrc: userData.profileObj.imageUrl,
        name: userData.profileObj.name,
      });
    }
  }, [userData]);

  return (
    <div className="header-comp pull-right">
      {children}
      <a href="./index.html" className="profile">
        <span>{profileData.name}</span>
        <img alt={'userPick'} src={profileData.iconSrc} />
      </a>
      <a href="./index.html" className="btn btn-xs btn-header">
        <i className="headerIcon icon-search" />
      </a>
    </div>
  );
};
