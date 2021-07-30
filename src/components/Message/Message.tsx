import React from 'react';
import styles from './Message.module.scss';
import classNames from 'classnames';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { useLocation } from 'react-router-dom';

interface MessageProps extends React.HTMLAttributes<HTMLElement> {
  from: string;
  title: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({
  from,
  title,
  text,
  children,
}) => {
  const { search } = useLocation();
  const realHref = {
    pathname: '/home',
    search,
  };

  return (
    <section className={`mainSection ${styles.main_section}`}>
      {children}
      <div className={classNames(styles.message_section)}>
        <ButtonLink href={realHref}>Return</ButtonLink>
        <span className={classNames(styles.message_section_text)}>
          From: {from}
        </span>
        <span className={classNames(styles.message_section_text)}>
          Subject: {title}
        </span>
        <span className={classNames(styles.message_section_text)}>
          <iframe
            seamless
            className={classNames(styles.message_section_iframe)}
            title={'Selected message'}
            src={`data:text/html;charset=UTF-8 ;base64,${text}`}
          />
        </span>
      </div>
    </section>
  );
};
