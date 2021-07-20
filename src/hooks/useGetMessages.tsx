import { useCallback, useMemo, useState } from 'react';
import { loadMessages } from '../api/userMessages/userMessages';

export type Direction = '0' | '+1' | '-1';

export const useGetMessages = (): {
  state: any;
  setMessageList: (
    token: string | null,
    category: string,
    direction: Direction,
  ) => void;
  clearMessageList: () => void;
} => {
  const [state, setState] = useState<any>({
    messages: [],
    pages: ['0'],
  });
  const clearMessageList = useCallback(() => {
    setState({
      messages: [],
      pages: ['0'],
    });
  }, []);
  const setMessageList = useCallback(
    (token: string | null, category: string, direction: Direction) => {
      if (token) {
        loadMessages(token, category, state.pages, direction).then(
          (messagesData) => {
            let pagesTEST = [...state.pages];
            if (direction === '+1') {
              pagesTEST.push(messagesData.nextPageToken);
            }
            if (direction === '-1' && pagesTEST.length > 2) {
              pagesTEST.pop();
            }
            if (direction === '0') {
              pagesTEST = ['0', messagesData.nextPageToken];
            }
            setState({
              messages: messagesData.list,
              pages: pagesTEST,
            });
          },
        );
      } else {
        clearMessageList();
      }
      //end here
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
