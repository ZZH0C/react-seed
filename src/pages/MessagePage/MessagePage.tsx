import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { loadOneMessage } from '../../api/userMessages/userMessages';
import { sortMessageData } from '../../hooks/useCreateMessagesUi';
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';
import { MessageFull } from '../../components/MessageFull/MessageFull';
import { GoogleMessage } from '../../models/GoogleMessage';

// const sortMessage = (data) => {
//
// }

interface MessagePageValues {
  snippet?: string;
  date: string;
  from: string;
  text?: string;
  title: string;
}

export const MessagePage: React.FC = () => {
  const userData = useContext(UserContext);
  const [state, setState] = useState<GoogleMessage | undefined>();
  const location = useLocation();
  const messageId = location.state;
  useEffect(() => {
    if (userData && 'accessToken' in userData) {
      loadOneMessage(messageId, userData.accessToken).then((respond) =>
        setState(respond),
      );
    }
  }, []);
  let text: MessagePageValues = {
    from: '',
    snippet: '',
    title: '',
    date: '',
    text: '',
  };
  if (state) text = sortMessageData(state);
  if (!text.text) {
    text.text = text.snippet;
  }
  return (
    <>
      <ButtonLink href={'/home'}>Return Home</ButtonLink>
      <MessageFull from={text.from} title={text.title} text={text.text} />
    </>
  );
};
