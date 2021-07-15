import React, { useContext, useEffect } from 'react';
import { useGetMessages } from './useGetMessages';
import { GoogleMessage } from '../models/GoogleMessage';
import { MessageItem } from '../components/MessageItem/MessageItem';
import { UserContext } from '../App';

export const sortMessageData = (messageData: GoogleMessage) => {
  const result = {
    from: '',
    snippet: messageData.snippet,
    title: '',
    date: '',
    text: messageData.payload.parts[0].body.data,
  };
  messageData.payload.headers.forEach(
    (element: { name: string; value: string }) => {
      switch (element.name) {
        case 'From':
          result.from = element.value;
          break;
        case 'Subject':
          result.title = element.value;
          break;
        case 'Date':
          const messageDate = new Date(element.value);
          result.date = `${messageDate.getDate()}-${messageDate.getMonth()}-${messageDate.getFullYear()}`;
          break;
        default:
          break;
      }
    },
  );
  return result;
};

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
