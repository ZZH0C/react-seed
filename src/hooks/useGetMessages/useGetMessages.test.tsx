import { act, renderHook } from '@testing-library/react-hooks';
import { Direction, useGetMessages } from './useGetMessages';
import { nullMessageDataState } from './useGetMessages';
import { loadMessages } from '../../api/userMessages/userMessages';
import { MessageList } from '../../models/MessageList';
import { mocked } from 'ts-jest/utils';

const NEXT_PAGE_TOKEN = 'NEXT_PAGE_TOKEN';
jest.mock('../../api/userMessages/userMessages');
const mockResponse: MessageList = {
  nextPageToken: NEXT_PAGE_TOKEN,
  list: [],
};

// export const SuccessMockMessageDataState: MessageStateValue = {
//   messages: [],
//   pages: ['SUCCESS_MOCK'],
// };

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

  it('should set state and reset it', async () => {
    const { waitForNextUpdate, result } = renderHook(() => useGetMessages());
    await act(async () => {
      expect(result.current.state).toEqual(nullMessageDataState);
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        fakeParams.direction,
      );
      await waitForNextUpdate();
      expect(result.current.state).toEqual({
        messages: [],
        pages: ['0', 'NEXT_PAGE_TOKEN'],
      });
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

  // it('should update state forward', () => {});

  // it('should clear state', () => {});
});
