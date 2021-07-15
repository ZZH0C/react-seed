import React from 'react';

interface MessageFullProps extends React.HTMLAttributes<HTMLElement> {
  from: string;
  title: string;
  text?: string;
}

export const MessageFull: React.FC<MessageFullProps> = ({
  from,
  title,
  text,
}) => {
  return (
    <section className={'message_section_container'}>
      <div className={'message_section'}>
        <span className={'message_section_text'}>From: {from}</span>
        <span className={'message_section_text'}>Subject: {title}</span>
        <span className={'message_section_text'}> {text}</span>
      </div>
    </section>
  );
};
