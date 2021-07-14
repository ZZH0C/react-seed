export interface GoogleMessage {
  value: {
    id: string;
    snippet: string;
    payload: { headers: { name: string; value: string }[] };
  };
}
