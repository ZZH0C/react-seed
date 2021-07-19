import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.scss';
import classNames from 'classnames';

interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLElement> {
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
  return (
    <Link className={classNames(styles.button_home)} to={href}>
      {children}
    </Link>
  );
};
