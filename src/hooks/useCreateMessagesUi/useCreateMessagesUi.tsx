import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Direction, useGetMessages } from '../useGetMessages/useGetMessages';
import { GoogleMessagePromise } from '../../models/GoogleMessage';
import { MessageItem } from '../../components/MessageItem/MessageItem';
import { sortMessageData } from '../useSortMessageData/useSortMessageData';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useQueryParams } from '../useQueryParams/useQueryParams';
import { useLocation } from 'react-router-dom';
import { PaginationButton } from '../../components/PaginationButton/PaginationButton';
import map from 'lodash/map';
import { Loader } from '../../components/Loader/Loader';
import styles from '../../components/MainSection/MainSection.module.scss';
import classNames from 'classnames';

export const useCreateMessagesUi = (): JSX.Element => {
  const userData = useContext(UserContext);
  const { setMessageList, state, clearMessageList } = useGetMessages();
  const { getGoogleQueryParams } = useQueryParams();
  const location = useLocation();
  const googleData = getGoogleQueryParams();
  let token: string | null = null;
  if (userData && 'accessToken' in userData) {
    token = userData.accessToken;
  }

  const [loaderState, setLoaderState] = useState(false);

  const activateLoader = useCallback(() => {
    setLoaderState(true);
  }, []);

  const disableLoader = useCallback(() => {
    setLoaderState(false);
  }, []);

  const refreshPage = useCallback(() => {
    activateLoader();
    setMessageList(token, googleData, Direction.current, disableLoader);
  }, [googleData, setMessageList, token]);

  useEffect(() => {
    activateLoader();
    clearMessageList();
    if (userData && 'accessToken' in userData) {
      refreshPage();
    }
    if (!userData) {
      setMessageList(token, '', Direction.current, disableLoader);
    }
    //TODO: add pagination and userData?.accessToken
  }, [userData, location.search]);

  const createMessage = (message: GoogleMessagePromise) => {
    const messageData = sortMessageData(message.value);
    return (
      <MessageItem
        key={Math.random()}
        fromWho={messageData.from}
        messageSnippet={messageData.snippet}
        messageTitle={messageData.title}
        messageDate={messageData.date}
        messageId={message.value.id}
        refreshPageCallback={refreshPage}
        activateLoader={activateLoader}
      />
    );
  };
  return (
    <>
      <div className={classNames(styles.main_section)}>
        <Loader isActive={loaderState} />
        {state.messages.length > 0 ? map(state.messages, createMessage) : []}
      </div>
      <div className="controlButtons">
        <PaginationButton
          isDisabled={state.pages.length < 3}
          isRight={false}
          onClickFunction={() => {
            activateLoader();
            setMessageList(token, googleData, Direction.prev, disableLoader);
          }}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          isDisabled={
            state.pages[state.pages.length - 1] === undefined ||
            state.pages.length < 2
          }
          isRight={true}
          onClickFunction={() => {
            activateLoader();
            setMessageList(token, googleData, Direction.next, disableLoader);
          }}
        >
          Next
        </PaginationButton>
      </div>
    </>
  );
};
