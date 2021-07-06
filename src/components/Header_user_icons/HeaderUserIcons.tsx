import React from 'react';
// import '../../styles/main.css';

interface HeaderUserIconsProps {
  style: 'headerIcon icon-mail' | 'headerIcon icon-bell';
}

export const HeaderUserIcons: React.FC<HeaderUserIconsProps> = ({ style }) => {
  return (
    <a href="index.html" className="btn btn-sm btn-header">
      <i className={style} />
    </a>
  );
};
