import { useCallback, useMemo, useState } from 'react';
import { loadMessages } from '../../api/userMessages/userMessages';
import _ from 'lodash';

export type Direction = '0' | '+1' | '-1';
export type messagesAndPages = {
  messages: any[];
  pages: string[];
};
export const nullMessageDataState: messagesAndPages = {
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
  const [state, setState] = useState<messagesAndPages>(nullMessageDataState);
  const clearMessageList = useCallback(() => {
    setState(nullMessageDataState);
  }, []);
  const setMessageList = useCallback(
    (token: string | null, category: string, direction: Direction) => {
      if (token) {
        loadMessages(token, category, state.pages, direction).then(
          (messagesData) => {
            let pageTokens = [...state.pages];
            if (direction === '+1') {
              pageTokens.push(messagesData.nextPageToken);
            }
            if (direction === '-1' && pageTokens.length > 2) {
              pageTokens = _.initial(pageTokens);
            }
            if (direction === '0') {
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
