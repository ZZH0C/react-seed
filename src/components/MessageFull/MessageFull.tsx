import React from 'react';
import styles from './MessageFull.module.scss';
import classNames from 'classnames';

interface MessageFullProps extends React.HTMLAttributes<HTMLElement> {
  from: string;
  title: string;
}

export const MessageFull: React.FC<MessageFullProps> = ({
  from,
  title,
  children,
}) => {
  return (
    <section className={classNames(styles.message_section_container)}>
      <div className={classNames(styles.message_section)}>
        <span className={classNames(styles.message_section_text)}>
          From: {from}
        </span>
        <span className={classNames(styles.message_section_text)}>
          Subject: {title}
        </span>
        <span className={classNames(styles.message_section_text)}>
          {children}
        </span>
      </div>
    </section>
  );
};
