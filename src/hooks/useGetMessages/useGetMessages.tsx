import { useCallback, useMemo, useState } from 'react';
import { loadMessages } from '../../api/userMessages/userMessages';
// import _ from 'lodash';
import initial from 'lodash/initial';
export enum Direction {
  next = 'next',
  prev = 'prev',
  current = 'current',
}

export type MessageResponseValue = {
  messages: any[];
  pages: string[];
};
export const nullMessageDataState: MessageResponseValue = {
  messages: [],
  pages: ['0'],
};

export const useGetMessages = (): {
  state: any;
  setMessageList: (
    token: string | null,
    category: string,
    direction: Direction,
  ) => void;
  clearMessageList: () => void;
} => {
  const [state, setState] =
    useState<MessageResponseValue>(nullMessageDataState);
  const clearMessageList = useCallback(() => {
    setState(nullMessageDataState);
  }, []);
  const setMessageList = useCallback(
    (token: string | null, category: string, direction: Direction) => {
      if (token) {
        loadMessages(token, category, state.pages, direction).then(
          (messagesData) => {
            let pageTokens = [...state.pages];
            if (direction === Direction.next) {
              //TODO: just fix ok?
              pageTokens.push(messagesData.nextPageToken);
            }
            if (direction === Direction.prev && pageTokens.length > 2) {
              pageTokens = initial(pageTokens);
            }
            if (direction === Direction.current) {
              pageTokens = ['0', messagesData.nextPageToken];
            }
            setState({
              messages: messagesData.list,
              pages: pageTokens,
            });
          },
        );
      } else {
        clearMessageList();
      }
    },
    [clearMessageList, state.pages],
  );
  return useMemo(
    () => ({
      state,
      setMessageList,
      clearMessageList,
    }),
    [state, setMessageList, clearMessageList],
  );
};
