import { useState } from 'react';
import { loadMessages } from '../api/userMessages/userMessages';

export const useGetMessages = (): {
  state: any;
  setMessageList: (token: string | null, category: string) => void;
} => {
  const [state, setState] = useState<any>([]);
  const setMessageList = (token: string | null, category: string) => {
    if (token) {
      loadMessages(token, category).then((r) => setState(r));
    } else {
      setState([]);
    }
  };
  return { setMessageList, state };
};
