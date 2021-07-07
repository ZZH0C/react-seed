import React from 'react';
// import '../../styles/main.css';

interface HeaderUserIconsProps {
  classname: 'icon-mail' | 'icon-bell';
}

export const HeaderUserIcons: React.FC<HeaderUserIconsProps> = ({
  classname,
}) => {
  return (
    <a href="index.html" className="btn btn-sm btn-header">
      <i className={`headerIcon ${classname}`} />
    </a>
  );
};
