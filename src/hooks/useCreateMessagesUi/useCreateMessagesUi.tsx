import React, { useContext, useEffect } from 'react';
import { Direction, useGetMessages } from '../useGetMessages/useGetMessages';
import { GoogleMessage } from '../../models/GoogleMessage';
import { MessageItem } from '../../components/MessageItem/MessageItem';
import { sortMessageData } from '../useSortMessageData/useSortMessageData';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useQueryParams } from '../useQueryParams/useQueryParams';
import { useLocation } from 'react-router-dom';
import { PaginationButton } from '../../components/PaginationButton/PaginationButton';

export const useCreateMessagesUi = (): JSX.Element => {
  const userData = useContext(UserContext);
  const { setMessageList, state, clearMessageList } = useGetMessages();
  const { getGoogleQueryParams } = useQueryParams();
  const messages: JSX.Element[] = [];
  const location = useLocation();
  const googleData = getGoogleQueryParams();
  let token: string | null = null;
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }
  useEffect(() => {
    clearMessageList();
    if (userData && 'accessToken' in userData) {
      setMessageList(token, googleData, Direction.current);
    }
    if (!userData) {
      setMessageList(token, '', Direction.current);
    }
    //TODO: add pagination and userData?.accessToken
  }, [userData, location]);
  //TODO: add lodash map pls and render it inside return
  if (state.messages.length > 0) {
    state.messages.forEach((e: GoogleMessage) => {
      const messageData = sortMessageData(e.value);
      messages.push(
        <MessageItem
          key={Math.random()}
          fromWho={messageData.from}
          messageSnippet={messageData.snippet}
          messageTitle={messageData.title}
          messageDate={messageData.date}
          messageId={e.value.id}
        />,
      );
    });
  }
  return (
    <>
      {messages}
      <div className="controlButtons">
        <PaginationButton
          onClick={() => setMessageList(token, googleData, Direction.prev)}
          isDisabled={state.pages.length < 3}
          isRight={false}
          onClickFunction={() =>
            setMessageList(token, googleData, Direction.prev)
          }
        >
          Previous
        </PaginationButton>
        <PaginationButton
          isDisabled={
            state.pages[state.pages.length - 1] === undefined ||
            state.pages.length < 2
          }
          isRight={true}
          onClickFunction={() =>
            setMessageList(token, googleData, Direction.next)
          }
        >
          Next
        </PaginationButton>
      </div>
    </>
  );
};