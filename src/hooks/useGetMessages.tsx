import { useState } from 'react';
import { loadMessages } from '../api/userMessages/userMessages';

export const useGetMessages = () => {
  const [state, setState] = useState<any>([]);
  const setMessageList = (token: string | null, category: string) => {
    if (token) {
      loadMessages(token, category).then((r) => setState(r));
    }
    if (!token) {
      setState([]);
    }
  };
  return { setMessageList, state };
};
