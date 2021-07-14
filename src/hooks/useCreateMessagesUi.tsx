import React, { useContext, useEffect } from 'react';
import { UserContext } from '../pages/HomePage/HomePage';
import { useGetMessages } from './useGetMessages';
import { GoogleMessage } from '../models/GoogleMessage';
import { MessageItem } from '../components/MessageItem/MessageItem';

export const useCreateMessagesUi = () => {
  const userData = useContext(UserContext);
  const { setMessageList, state } = useGetMessages();

  const messages: JSX.Element[] = [];

  useEffect(() => {
    if (userData && 'accessToken' in userData) {
      const token = userData.accessToken;
      setMessageList(token);
    }
    if (!userData) {
      setMessageList(null);
    }
  }, [userData]);

  if (state.length > 0) {
    state.forEach((e: GoogleMessage) => {
      const props = {
        from: '',
        snippet: e.value.snippet,
        title: '',
      };
      e.value.payload.headers.forEach((e: { name: string; value: string }) => {
        if (e.name === 'From') props.from = e.value;
        if (e.name === 'Subject') props.title = e.value;
      });
      messages.push(
        <MessageItem
          key={Math.random()}
          fromWho={props.from}
          messageSnippet={props.snippet}
          messageTitle={props.title}
        />,
      );
    });
  }
  return messages;
};
