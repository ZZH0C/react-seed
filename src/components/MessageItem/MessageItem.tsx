import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  refreshPageCallback: any;
  activateLoader: any;
}

export const MessageItem: React.FC<MessageItemProps> = ({
  fromWho,
  messageTitle,
  messageSnippet,
  messageDate,
  messageId,
  refreshPageCallback,
  activateLoader,
}) => {
  const userData = useContext(UserContext);
  const { search } = useLocation();
  let token = '';
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }
  return (
    <section className={classNames(styles.media_message)}>
      <div className="media-body">
        <div className="userInfo clearfix">
          <div className={classNames(styles.row)}>
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
        </div>
        <div className={classNames(styles.item_name)}>
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
          <button
            className={classNames(styles.delete_button)}
            onClick={() => {
              activateLoader();
              deleteMessage(messageId, token).then(refreshPageCallback);
            }}
          >
            Delete message
          </button>
        </div>
        <p>{messageSnippet} </p>
      </div>
    </section>
  );
};
