import React, { useContext, useEffect, useState } from 'react';
interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}
import { UserContext } from '../../pages/HomePage/HomePage';

export const HeaderUser: React.FC<HeaderUserProps> = ({ children }) => {
  const userData = useContext(UserContext);
  const emptyUserPictureSrc =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  const defaultUserInfo = {
    name: '',
    iconSrc: emptyUserPictureSrc,
  };

  const [profileSrc, setProfileSrc] = useState(defaultUserInfo);

  useEffect(() => {
    if (userData) {
      if ('profileObj' in userData) {
        setProfileSrc({
          iconSrc: userData.profileObj.imageUrl,
          name: userData.profileObj.name,
        });
      }
    } else {
      setProfileSrc(defaultUserInfo);
    }
  }, [userData]);

  return (
    <div className="header-comp pull-right">
      {children}
      <a href="./index.html" className="profile">
        <span>{profileSrc.name}</span>
        <img alt={'userPick'} src={profileSrc.iconSrc} />
      </a>
      <a href="./index.html" className="btn btn-xs btn-header">
        <i className="headerIcon icon-search" />
      </a>

      <button
        onClick={() => {
          if (userData)
            if ('profileObj' in userData) {
              console.log(userData.profileObj);
            }
        }}
      >
        Click me to test!
      </button>
    </div>
  );
};
