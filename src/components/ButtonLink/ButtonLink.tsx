import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLElement> {
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link to={href}>
      <button className={'button_home'}>{children}</button>
    </Link>
  );
};
