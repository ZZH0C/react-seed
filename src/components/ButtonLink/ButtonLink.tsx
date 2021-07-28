import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLElement> {
  href: {
    pathname: string;
    search: string;
  };
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link className={styles.button_home} to={href}>
      {children}
    </Link>
  );
};
