import { useState } from 'react';
import { loadMessages } from '../api/userMessages';

export const useGetMessages = () => {
  const [state, setState] = useState<any>([]);

  const setMessageList = (token: string | null) => {
    if (token) {
      loadMessages(token).then((r) => setState(r));
    }
    if (!token) {
      setState([]);
    }
  };
  return { setMessageList, state };
};
