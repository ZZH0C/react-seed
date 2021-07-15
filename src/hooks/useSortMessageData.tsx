import { GoogleMessage } from '../models/GoogleMessage';

const convertDate = (date: string) => {
  const messageDate = new Date(date);
  if (isNaN(messageDate.getDate())) {
    return '';
  } else {
    return `${messageDate.getDate()}-${messageDate.getMonth()}-${messageDate.getFullYear()}`;
  }
};

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
          if (result.date) result.date = convertDate(element.value);
          break;
        default:
          break;
      }
    },
  );
  return result;
};
