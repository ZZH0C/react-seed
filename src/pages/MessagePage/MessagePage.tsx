import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { loadOneMessage } from '../../api/userMessages/userMessages';
import { sortMessageData } from '../../hooks/useCreateMessagesUi';

// const sortMessage = (data) => {
//
// }

export const MessagePage: React.FC = () => {
  const userData = useContext(UserContext);
  const [state, setState] = useState<any>();
  const location = useLocation();
  const messageId: any = location.state;
  useEffect(() => {
    if (userData && 'accessToken' in userData) {
      loadOneMessage(messageId, userData.accessToken).then((r: any) =>
        setState(r),
      );
    }
  }, []);
  let text: {
    snippet: any;
    date: string;
    from: string;
    text: any;
    title: string;
  } = {
    from: '',
    snippet: '',
    title: '',
    date: '',
    text: '',
  };
  if (state) text = sortMessageData(state);
  if (text.text === '') {
    text.text = text.snippet;
  }
  return (
    <>
      <Link to="/home">
        <button className={'button_home'}>Return Home</button>
      </Link>
      <section className={'message_section_container'}>
        <div className={'message_section'}>
          <span>From: {text.from}</span>
          <span>Subject: {text.title}</span>
          <span> {text.text}</span>
        </div>
      </section>
    </>
  );
};
