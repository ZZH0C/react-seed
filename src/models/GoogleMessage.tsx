export interface GoogleMessage {
  value: {
    snippet: string;
    payload: { headers: { name: string; value: string }[] };
  };
}
