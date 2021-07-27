import axios from 'axios';
import { sendMessageData } from '../../models/SendMessageData';
import base64url from 'base64url';

export const sendMessage = async (
  data: sendMessageData,
  token: string,
): Promise<any> => {
  const rawMessageBodyDecoded = `To: <${data.to}>  
Cc: ${data.cc}  
Subject: ${data.subject}  
${data.messageText}`;
  const rawMessageBodyEncoded = base64url.encode(rawMessageBodyDecoded);
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/send`;
  try {
    return await axios.post(
      url,
      {
        raw: rawMessageBodyEncoded,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
};
