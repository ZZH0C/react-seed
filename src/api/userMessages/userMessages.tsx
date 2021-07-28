import axios from 'axios';
import { SetStateAction } from 'react';
import { GoogleMessage } from '../../models/GoogleMessage';
import { PaginationToken } from '../../models/PaginationToken';
import { Direction } from '../../hooks/useGetMessages/useGetMessages';
import { MessageList } from '../../models/MessageList';

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

const getMessagesArray = async (
  idArr: { id: string }[],
  token: string,
): Promise<Promise<any>[]> => {
  return idArr.map((e: { id: string }) => {
    return getMessage(e.id, token);
  });
};

const chosePageToken = (direction: Direction, pages: string[]) => {
  switch (direction) {
    case Direction.next:
      return pages[pages.length - 1];

    case Direction.prev:
      return pages[pages.length - 3];

    case Direction.current:
      return pages[0];
  }
};

export interface loadMessagesFilter {
  token: string;
  category: string;
  pages: PaginationToken;
  direction: Direction;
}

export const loadMessages = async (
  filter: loadMessagesFilter,
): Promise<MessageList> => {
  const pageToken = chosePageToken(filter.direction, filter.pages);
  const idList = await getMessageList({
    token: filter.token,
    category: filter.category,
    pageToken: pageToken,
  });
  if (idList && idList.messages) {
    const messageList = await getMessagesArray(idList.messages, filter.token);
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
