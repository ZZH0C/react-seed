export interface GoogleMessage {
  id: string;
  snippet: string;
  payload: {
    body?: {
      data: string;
    };
    headers: {
      name: string;
      value: string;
    }[];
    parts: {
      mimeType: string;
      body: {
        data?: string;
      };
      parts?: {
        mimeType: string;
        body: {
          data?: string;
        };
      }[];
    }[];
  };
}

export interface GoogleMessagePromise {
  value: GoogleMessage;
}
