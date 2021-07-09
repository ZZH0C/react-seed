import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../pages/HomePage/HomePage';

interface HeaderUserProps extends React.HTMLAttributes<HTMLElement> {
  src?: string;
  alt?: string;
}

async function testFetch(token: string) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?access_token=${token}`;
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    alert('Ошибка HTTP: ' + response.status);
  }
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
    if (userData) {
      if ('profileObj' in userData) {
        setProfileSrc({
          iconSrc: userData.profileObj.imageUrl,
          name: userData.profileObj.name,
        });
      }
    } else {
      setProfileSrc({
        name: '',
        iconSrc: emptyProfilePictureSrc,
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

      <button
        onClick={() => {
          if (userData)
            if ('accessToken' in userData) {
              testFetch(userData.accessToken).then((r) => console.log(r));
            }
        }}
      >
        Click me to test!
      </button>
    </div>
  );
};
