import { act, renderHook } from '@testing-library/react-hooks';
import {
  Direction,
  MessageStateValue,
  sortResponse,
  useGetMessages,
} from './useGetMessages';
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

export const SuccessMockMessageDataState: MessageStateValue = {
  messages: [],
  pages: ['SUCCESS_MOCK'],
};

describe('hooks/useGetMessages', () => {
  const fakeParams = {
    token: '123456',
    category: 'category',
    direction: Direction.current,
  };

  beforeEach(() => {
    mocked(loadMessages).mockImplementation(() => {
      return Promise.resolve(mockResponse);
    });
  });

  it('should clear state ti initial value', async () => {
    // console.log(result.current);
    const { waitForNextUpdate, result } = renderHook(() => useGetMessages());
    await act(async () => {
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        fakeParams.direction,
      );
      await waitForNextUpdate();

      result.current.clearMessageList();
      // console.log(result.current.state);
      // expect(sortResponse).toBeCalled();
      expect(result.current.state).toEqual(nullMessageDataState);
    });
  });

  it('should update state forward', () => {});

  // it('should clear state', () => {});
});

//TODO: put this test into another
// it('should set initial state', () => {
//   const { result } = renderHook(() => useGetMessages());
//   expect(result.current.state).toEqual(nullMessageDataState);
// });

//TODO: put this test into another
// it('should clear state ti initial value', () => {
//   const { result } = renderHook(() => useGetMessages());
//   act(() => {
//     result.current.clearMessageList();
//   });
//   expect(result.current.state).toEqual(nullMessageDataState);
// });
