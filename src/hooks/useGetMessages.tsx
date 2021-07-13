import { useState } from 'react';
import axios from 'axios';

async function getMessage(id: string, token: string | null) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?access_token=${token}`;
  // const response = await fetch(url);

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    //   //TODO: write nice handler
    console.error(error);
  }
}

async function getMessageList(token: string | null) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3&access_token=${token}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    //   //TODO: write nice handler
    console.error(error);
  }
}

async function loadMessages(token: string | null) {
  const idList = await getMessageList(token);
  const messageList = idList.messages.map(async (e: { id: string }) => {
    return await getMessage(e.id, token);
  });
  return await Promise.allSettled(messageList);
}

export const useGetMessages = () => {
  const [state, setState] = useState<any>([]);

  const setMessageList = (token: string | null) => {
    if (token) loadMessages(token).then((r) => setState(r));
    if (!token) setState([]);
  };
  return { setMessageList, state };
};
