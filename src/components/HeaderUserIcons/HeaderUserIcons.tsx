import React from 'react';

interface HeaderUserIconsProps {
  classname: 'icon-mail' | 'icon-bell';
  url?: string;
}

export const HeaderUserIcons: React.FC<HeaderUserIconsProps> = ({
  classname,
  url,
}) => {
  return (
    <a href={url} className="btn btn-sm btn-header">
      <i className={`headerIcon ${classname}`} />
    </a>
  );
};
