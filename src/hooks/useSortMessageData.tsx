import { GoogleMessage } from '../models/GoogleMessage';
import _ from 'lodash';

interface MailHeaders {
  From?: string;
  Subject?: string;
  Date?: string;
}

const convertDate = (date: string) => {
  const messageDate = new Date(date);
  if (messageDate.getDate() !== messageDate.getDate()) {
    return '';
  } else {
    return `${messageDate.getDate()}-${messageDate.getMonth()}-${messageDate.getFullYear()}`;
  }
};

export const sortMessageData = (messageData: GoogleMessage) => {
  const result = {
    from: '',
    snippet: '',
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
          if (result.date) result.date = convertDate(element.value);
          break;
        default:
          break;
      }
    },
  );
  return result;
};
