import React from 'react';

interface MessageItemProps extends React.HTMLAttributes<HTMLElement> {
  fromWho: string;
  messageTitle: string;
  messageSnippet: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  fromWho,
  messageTitle,
  messageSnippet,
}) => {
  return (
    <section className="media">
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{fromWho}</span>
        </div>
        <div className="itemName">
          <span className="media-heading" title={messageTitle}>
            {messageTitle}
          </span>
          <span className="status pull-right" />
        </div>
        <p>{messageSnippet}</p>
      </div>
    </section>
  );
};
