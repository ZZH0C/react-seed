export interface GoogleMessage {
  value: GoogleMessage;
  id: string;
  snippet: string;
  payload: {
    headers: { name: string; value: string }[];
    parts: { body: { data?: string } }[];
  };
}
