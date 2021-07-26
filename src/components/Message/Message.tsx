import React from 'react';
import styles from './Message.module.scss';
import classNames from 'classnames';

interface MessageProps extends React.HTMLAttributes<HTMLElement> {
  from: string;
  title: string;
  text: string;
}

export const Message: React.FC<MessageProps> = ({ from, title, text }) => {
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
          <iframe
            seamless
            className={classNames(styles.message_section_iframe)}
            title={'123'}
            src={`data:text/html;charset=UTF-8 ;base64,${text}`}
          />
        </span>
      </div>
    </section>
  );
};
