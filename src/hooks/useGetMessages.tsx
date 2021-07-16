import { useState } from 'react';
import { loadMessages } from '../api/userMessages/userMessages';

export const useGetMessages = (category: string) => {
  const [state, setState] = useState<any>([]);
  const setMessageList = (token: string | null) => {
    if (token) {
      loadMessages(token, category).then((r) => setState(r));
    }
    if (!token) {
      setState([]);
    }
  };
  return { setMessageList, state };
};
