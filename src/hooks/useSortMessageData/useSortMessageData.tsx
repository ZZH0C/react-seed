import { GoogleMessage } from '../../models/GoogleMessage';
import { find } from 'lodash';
//
// interface MailHeaders {
//   From?: string;
//   Subject?: string;
//   Date?: string;
// }

import moment from 'moment';
import base64url from 'base64url';

const convertDate = (date: string) => {
  const messageDate = new Date(date);
  if (!moment(date, true).isValid()) {
    return '';
  } else {
    return `${messageDate.getDate()}-${messageDate.getMonth()}-${messageDate.getFullYear()}`;
  }
};

export const sortMessageData = (
  messageData: GoogleMessage,
): {
  snippet: string;
  date: string;
  from: string;
  text: any;
  title: string;
} => {
  const result = {
    from: '',
    snippet: '',
    title: '',
    date: '',
    text: '',
  };
  if (messageData.snippet) {
    result.snippet = messageData.snippet;
  }
  if (messageData.payload) {
    let encodedHTML;

    if (messageData.payload.body && messageData.payload.body.data) {
      result.text = base64url.toBase64(messageData.payload.body.data);
    }

    const body = find(
      find(messageData.payload.parts, { mimeType: 'multipart/alternative' })
        ?.parts,
      { mimeType: 'text/html' },
    )?.body;

    if (body) {
      encodedHTML = body.data;
    } else {
      const body = find(messageData.payload.parts, {
        mimeType: 'text/html',
      })?.body;
      encodedHTML = body?.data;
    }
    if (encodedHTML) result.text = base64url.toBase64(encodedHTML);
  }

  // TODO:  fix with using lodash
  // const headersList = ['From', 'Subject', 'Date'];
  // const filteredHeaders = _.filter(
  //   messageData.payload.headers,
  //   ({ name }: { name: string }) => headersList.includes(name),
  // );
  // console.log(filteredHeaders);
  // const pairs = _.map(
  //   filteredHeaders,
  //   ({ name, value }: { name: string; value: string }) => [name, value],
  // );
  // console.log(pairs);
  // const headers: MailHeaders = _.fromPairs(pairs);
  // console.log(headers);

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
          if (element.value) result.date = convertDate(element.value);
          break;
        default:
          break;
      }
    },
  );
  return result;
};
0;
