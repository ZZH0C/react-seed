import axios from 'axios';
import { SetStateAction } from 'react';
import { GoogleMessage } from '../../models/GoogleMessage';
import { PaginationToken } from '../../models/PaginationToken';
import { Direction } from '../../hooks/useGetMessages/useGetMessages';

interface GoogleFilter {
  token: string;
  category: string;
  pageToken: string;
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
      params: { q: filter.category, pageToken: filter.pageToken },
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

interface messageList {
  nextPageToken: any;
  list: Array<
    PromiseSettledResult<
      Promise<any> extends PromiseLike<infer U> ? U : Promise<any>
    >
  >;
}

export const loadMessages = async (
  token: string,
  category: string,
  pages: PaginationToken,
  direction: Direction,
): Promise<messageList> => {
  let pageToken;
  switch (direction) {
    case '+1':
      pageToken = pages[pages.length - 1];
      break;
    case '-1':
      pageToken = pages[pages.length - 3];
      break;
    case '0':
      pageToken = pages[0];
      break;
  }
  const idList = await getMessageList({
    token: token,
    category: category,
    pageToken: pageToken,
  });
  if (idList && idList.messages) {
    const messageList = await getMessagesArray(idList.messages, token);
    const list = await Promise.allSettled(messageList);
    return {
      list: list,
      nextPageToken: idList.nextPageToken,
    };
  } else {
    return {
      list: [],
      nextPageToken: null,
    };
  }
};

export const loadOneMessage = async (
  id: string,
  token: string,
): Promise<SetStateAction<GoogleMessage | undefined>> => {
  return await getMessage(id, token);
};
