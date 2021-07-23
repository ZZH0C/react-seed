import { loadMessages, loadMessagesFilter } from './userMessages';
import { Direction } from '../../hooks/useGetMessages/useGetMessages';
import { renderHook } from '@testing-library/react-hooks';

describe('hooks/userMessages/loadMessages', () => {
  const fakeFilter: loadMessagesFilter = {
    token: 'USER_TOKEN',
    category: 'FAKE_CATEGORY',
    pages: ['0', 'PAGE_ONE', 'PAGE_TWO'],
    direction: Direction.current,
  };

  it('should set current state and reset it', () => {
    const {} = renderHook(() => loadMessages(fakeFilter));
  });
});

// describe('hooks/userMessages/loadOneMessage', () => {
//   it('should set current state and reset it', () => {
//
//   });
// });
