import React from 'react';
interface MainSectionContentItemProps {
  user: string;
  userPicture: string;
  userStatus: string;
  title: string;
  isRead: boolean;
  dateTime: string;
  text: string;
  comments: number;
  tags: string[];
}

export const MainSectionContentItem: React.FC<MainSectionContentItemProps> = (
  props,
) => {
  const tags = props.tags.map((elem) => {
    return (
      <a key={Math.random()} href="index.html" className="tag" title="tag">
        {elem}
      </a>
    );
  });

  const d = new Date(props.dateTime);
  const t = new Date(Date.now());
  return (
    <div className="media">
      <div className="media-left">
        <a href="index.html">
          <img className="media-object" src={props.userPicture} alt="userpic" />
        </a>
      </div>
      <div className="media-body">
        <div className="userInfo clearfix">
          <span>{props.user}</span>
          <span className="rank">{props.userStatus}</span>
          <div className="commentsAndTime pull-right">
            <a href="index.html">
              <i className="icon-chat"></i>
              {props.comments}
            </a>
            <span>
              <i className="icon-clock"></i>
              <time className="timeago" dateTime={props.dateTime}>
                {t.getFullYear() - d.getFullYear()}Y
              </time>
            </span>
          </div>
        </div>
        <div className="itemName">
          <a href="index.html" className="media-heading" title={props.title}>
            {props.title}
          </a>
          <span
            className={
              props.isRead ? 'status pull-right hidden' : 'status pull-right'
            }
          ></span>
        </div>
        <p>{props.text}</p>
        <div className="tags">
          <button type="submit" className="btn btn-tag">
            <i className="icon-tag"></i>
          </button>
          {tags}
        </div>
      </div>
    </div>
  );
};
