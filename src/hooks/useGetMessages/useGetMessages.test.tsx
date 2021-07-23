import { act, renderHook } from '@testing-library/react-hooks';
import {
  Direction,
  MessageStateValue,
  nullMessageDataState,
  useGetMessages,
} from './useGetMessages';
import { loadMessages } from '../../api/userMessages/userMessages';
import { MessageList } from '../../models/MessageList';
import { mocked } from 'ts-jest/utils';

const NEXT_PAGE_TOKEN = 'NEXT_PAGE_TOKEN';
jest.mock('../../api/userMessages/userMessages');
const mockResponse: MessageList = {
  nextPageToken: NEXT_PAGE_TOKEN,
  list: [],
};

const currentSuccessMockMessageDataState: MessageStateValue = {
  messages: [],
  pages: ['0', 'NEXT_PAGE_TOKEN'],
};
const nextSuccessMockMessageDataState: MessageStateValue = {
  messages: [],
  pages: ['0', 'NEXT_PAGE_TOKEN'],
};
const prevSuccessMockMessageDataState: MessageStateValue = {
  messages: [],
  pages: ['0'],
};

mocked(loadMessages).mockImplementation(() => {
  return Promise.resolve(mockResponse);
});

describe('hooks/useGetMessages', () => {
  const fakeParams = {
    token: '123456',
    category: 'category',
    direction: Direction.current,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set current state and reset it', async () => {
    const { waitForNextUpdate, result } = renderHook(() => useGetMessages());
    await act(async () => {
      expect(result.current.state).toEqual(nullMessageDataState);
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        fakeParams.direction,
      );
      await waitForNextUpdate();
      expect(result.current.state).toEqual(currentSuccessMockMessageDataState);
      expect(loadMessages).toBeCalledWith({
        token: fakeParams.token,
        category: fakeParams.category,
        pages: nullMessageDataState.pages,
        direction: fakeParams.direction,
      });
      result.current.clearMessageList();
      expect(result.current.state).toEqual(nullMessageDataState);
    });
  });

  it('should call update for next page and set state', async () => {
    const { waitForNextUpdate, result } = renderHook(() => useGetMessages());
    await act(async () => {
      expect(result.current.state).toEqual(nullMessageDataState);
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        Direction.next,
      );
      await waitForNextUpdate();

      expect(loadMessages).toBeCalledWith({
        token: fakeParams.token,
        category: fakeParams.category,
        pages: nullMessageDataState.pages,
        direction: Direction.next,
      });
    });
    expect(result.current.state).toEqual(nextSuccessMockMessageDataState);
  });

  it('should call update for prev page and set state', async () => {
    const { waitForNextUpdate, result } = renderHook(() => useGetMessages());
    await act(async () => {
      expect(result.current.state).toEqual(nullMessageDataState);
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        Direction.prev,
      );
      await waitForNextUpdate();
    });
    expect(loadMessages).toBeCalledWith({
      token: fakeParams.token,
      category: fakeParams.category,
      pages: nullMessageDataState.pages,
      direction: Direction.prev,
    });
    expect(result.current.state).toEqual(prevSuccessMockMessageDataState);
  });
});
