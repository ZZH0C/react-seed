import axios from 'axios';
import { sendMessageData } from '../../components/Modal/Modal';

export const sendMessage = async (
  data: sendMessageData,
  token: string,
): Promise<any> => {
  const url = `https://gmail.googleapis.com/upload/gmail/v1/users/${data.to}/messages/send`;
  try {
    const response = await axios.post(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
};
