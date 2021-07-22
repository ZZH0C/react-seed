export interface MessageList {
  nextPageToken: any;
  list: Array<
    PromiseSettledResult<
      Promise<any> extends PromiseLike<infer U> ? U : Promise<any>
    >
  >;
}
