import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../pages/HomePage/HomePage';

interface MessageItemProps extends React.HTMLAttributes<HTMLElement> {
  fromWho: string;
  messageTitle: string;
  messageSnippet: string;
  messageDate: string;
  messageId: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  fromWho,
  messageTitle,
  messageSnippet,
  messageDate,
  messageId,
}) => {
  const userData = useContext(UserContext);
  let token = '';
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }
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
          <Link
            to={{
              pathname: '/message',
              state: { id: messageId, token: token },
            }}
          >
            <span className="media-heading" title="Message Title">
              {messageTitle}
            </span>
          </Link>
          <span className="status pull-right" />
        </div>
        <p>{messageSnippet} </p>
      </div>
    </section>
  );
};
