import { useState } from 'react';

async function getMessage(id: string, token: string | null) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}?access_token=${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    alert('Ошибка HTTP: ' + response.status);
  }
  if (response.ok) {
    return await response.json();
  }
}

async function getMessageList(token: string | null) {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3&access_token=${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    alert('Ошибка HTTP: ' + response.status);
  }
  if (response.ok) {
    return await response.json();
  }
}

async function loadMessages(token: string | null) {
  const idList = await getMessageList(token);
  const messageList = idList.messages.map(async (e: { id: string }) => {
    return await getMessage(e.id, token);
  });
  const b = await Promise.allSettled(messageList);
  // console.log(b);
  return b;
}

// interface MessageListModel {
//   messageList: any | null;
// }

// function reducer(
//   state: MessageListModel,
//   action: {
//     type: string;
//     token: string | null;
//   },
// ): { messageList: Promise<any> | null } {
//   switch (action.type) {
//     case 'GET_LIST': {
//       return {
//         messageList: loadMessages(action.token),
//       };
//     }
//     case 'RESET':
//       return {
//         messageList: null,
//       };
//     default:
//       throw new Error();
//   }
// }
// const initialState: MessageListModel = { messageList: null };

export const useGetMessages = () => {
  const [state, setState] = useState<any>([]);
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const resetMessageList = () => {
  //   dispatch({ type: 'RESET', token: null });
  // };
  const setMessageList = (token: string | null) => {
    if (token) loadMessages(token).then((r) => setState(r));
    if (!token) setState([]);
  };
  // return { state, resetMessageList, getMessageList };
  return { setMessageList, state };
};
