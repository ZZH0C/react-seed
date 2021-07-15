import React, { useContext, useEffect } from 'react';
import { useGetMessages } from './useGetMessages';
import { GoogleMessage } from '../models/GoogleMessage';
import { MessageItem } from '../components/MessageItem/MessageItem';
import { sortMessageData } from './useSortMessageData';
import { UserContext } from '../pages/HomePage/HomePage';

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
      const messageData = sortMessageData(e.value);
      messages.push(
        <MessageItem
          key={Math.random()}
          fromWho={messageData.from}
          messageSnippet={messageData.snippet}
          messageTitle={messageData.title}
          messageDate={messageData.date}
          messageId={e.value.id}
        />,
      );
    });
  }
  return messages;
};
