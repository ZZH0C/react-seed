import React from 'react';

interface MessageItemProps extends React.HTMLAttributes<HTMLElement> {
  fromWho: string;
  messageTitle: string;
  messageSnippet: string;
  messageDate: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  fromWho,
  messageTitle,
  messageSnippet,
  messageDate,
}) => {
  return (
    <section className="media">
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>from: {fromWho}</span>
          <div className="commentsAndTime pull-right">
            <span>
              <i className="icon-clock" />
              <time className="timeago" dateTime={messageDate}>
                {messageDate}
              </time>
            </span>
          </div>
        </div>
        <div className="itemName">
          <a href="/" className="media-heading" title="Message Title">
            {messageTitle}
          </a>
          <span className="status pull-right" />
        </div>
        <p>{messageSnippet} </p>
      </div>
    </section>
  );
};
