import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../pages/HomePage/HomePage';
import styles from './MessageItem.module.scss';
import classNames from 'classnames';
import { deleteMessage } from '../../api/deleteMessage/deleteMessage';

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
  const { search, pathname } = useLocation();
  let token = '';
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }
  const { replace } = useHistory();
  return (
    <section className={classNames(styles.media_message)}>
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
              search,
              state: { id: messageId, token: token },
            }}
          >
            <span className="media-heading" title="Message Title">
              {messageTitle ? messageTitle : 'No subject'}
            </span>
          </Link>
          <span className="status pull-right" />
        </div>
        <p>{messageSnippet} </p>
        <button
          className={classNames(styles.delete_button)}
          onClick={() => {
            deleteMessage(messageId, token).then(() =>
              replace({
                pathname,
                search,
              }),
            );
          }}
        >
          DELETE
        </button>
      </div>
    </section>
  );
};
