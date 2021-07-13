import axios from 'axios';

async function getMessage(id: string, token: string | null) {
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
}

async function getMessageList(token: string | null) {
  const url =
    'https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3';
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
}

export async function loadMessages(token: string | null) {
  const idList = await getMessageList(token);
  const messageList = idList.messages.map(async (e: { id: string }) => {
    return await getMessage(e.id, token);
  });
  return await Promise.allSettled(messageList);
}
