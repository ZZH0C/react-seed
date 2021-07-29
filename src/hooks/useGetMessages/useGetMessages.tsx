import { useCallback, useMemo, useState } from 'react';
import { loadMessages } from '../../api/userMessages/userMessages';
import initial from 'lodash/initial';
import { MessageList } from '../../models/MessageList';
export enum Direction {
  next = 'next',
  prev = 'prev',
  current = 'current',
}

export type MessageStateValue = {
  messages: any[];
  pages: string[];
};
export const nullMessageDataState: MessageStateValue = {
  messages: [],
  pages: ['0'],
};

const sortResponse = (
  messagesData: MessageList,
  state: MessageStateValue,
  direction: Direction,
): {
  pages: string[];
  messages: Array<
    PromiseSettledResult<
      Promise<any> extends PromiseLike<infer U> ? U : Promise<any>
    >
  >;
} => {
  let pageTokens = [...state.pages];
  if (direction === Direction.next) {
    pageTokens = [...state.pages, messagesData.nextPageToken];
  }
  if (direction === Direction.prev && state.pages.length > 2) {
    pageTokens = initial(pageTokens);
  }
  if (direction === Direction.current) {
    pageTokens = ['0', messagesData.nextPageToken];
  }
  return {
    messages: messagesData.list,
    pages: pageTokens,
  };
};

export const useGetMessages = (): {
  state: MessageStateValue;
  setMessageList: (
    token: string | null,
    category: string,
    direction: Direction,
    disableLoader: any,
  ) => void;
  clearMessageList: () => void;
} => {
  const [state, setState] = useState<MessageStateValue>(nullMessageDataState);

  const clearMessageList = useCallback(() => {
    setState(nullMessageDataState);
  }, []);

  const setMessageList = useCallback(
    (
      token: string | null,
      category: string,
      direction: Direction,
      disableLoader: any,
    ) => {
      if (token) {
        loadMessages({
          token: token,
          category: category,
          pages: state.pages,
          direction: direction,
        }).then((messageData) => {
          setState(sortResponse(messageData, state, direction));
          disableLoader();
        });
      } else {
        clearMessageList();
      }
    },
    [clearMessageList, state],
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
