import React from 'react';

interface NavbarElemProps extends React.HTMLAttributes<HTMLElement> {
  isActive: true | false;
  text: string;
}

export const NavbarElem: React.FC<NavbarElemProps> = ({ isActive, text }) => {
  let style;
  if (isActive) {
    style = 'active';
  } else {
    style = '';
  }
  return (
    <li>
      <a href="index.html" title="Menu item" className={style}>
        {text}
      </a>
    </li>
  );
};
