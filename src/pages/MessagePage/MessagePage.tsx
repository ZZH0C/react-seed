import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadOneMessage } from '../../api/userMessages/userMessages';
import { Message } from '../../components/Message/Message';
import { GoogleMessage } from '../../models/GoogleMessage';
import { sortMessageData } from '../../hooks/useSortMessageData/useSortMessageData';
import base64url from 'base64url';
import { Main } from '../../components/Main/Main';

interface MessagePageValues {
  snippet?: string;
  date: string;
  from: string;
  text?: string;
  title: string;
}

export const MessagePage: React.FC = () => {
  const [message, setMessage] = useState<GoogleMessage | undefined>();
  const { state } = useLocation();
  const apiData: any = state;
  useEffect(() => {
    loadOneMessage(apiData.id, apiData.token).then((message) =>
      setMessage(message),
    );
  }, []);
  let messageData: MessagePageValues = {
    from: '',
    snippet: '',
    title: '',
    date: '',
    text: '',
  };
  if (message) messageData = sortMessageData(message);
  if (!messageData.text) {
    messageData.text = messageData.snippet;
  }

  let convertedSuperText = '';
  if (messageData.text)
    convertedSuperText = base64url.toBase64(messageData.text);

  return (
    <Main>
      <Message
        from={messageData.from}
        title={messageData.title}
        text={convertedSuperText}
      />
    </Main>
  );
};
