import axios from 'axios';

export const deleteMessage = async (
  id: string,
  token: string,
): Promise<any> => {
  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`;
  try {
    const response = await axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    //TODO: write nice error handler
    console.error(error);
  }
};
