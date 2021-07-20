import axios from 'axios';
import { SetStateAction } from 'react';
import { GoogleMessage } from '../../models/GoogleMessage';

interface GoogleFilter {
  token: string;
  category: string;
}

const getMessage = async (id: string, token: string) => {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
};

const getMessageList = async (filter: GoogleFilter) => {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3`;
  try {
    const response = await axios.get(url, {
      params: { q: filter.category },
      headers: {
        Authorization: `Bearer ${filter.token}`,
      },
    });
    return response.data;
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
};

const getMessagesArray = async (idArr: { id: string }[], token: string) => {
  return idArr.map((e: { id: string }) => {
    return getMessage(e.id, token);
  });
};

export const loadMessages = async (
  token: string,
  category: string,
): Promise<
  Array<
    PromiseSettledResult<
      Promise<any> extends PromiseLike<infer U> ? U : Promise<any>
    >
  >
> => {
  const idList = await getMessageList({ token: token, category: category });
  if (idList && idList.messages) {
    const messageList = await getMessagesArray(idList.messages, token);
    return Promise.allSettled(messageList);
  } else {
    return [];
  }
};

export const loadOneMessage = async (
  id: string,
  token: string,
): Promise<SetStateAction<GoogleMessage | undefined>> => {
  return await getMessage(id, token);
};
