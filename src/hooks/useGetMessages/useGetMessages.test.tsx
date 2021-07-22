import { act, renderHook } from '@testing-library/react-hooks';
import { Direction, useGetMessages } from './useGetMessages';
import { nullMessageDataState } from './useGetMessages';

describe('hooks/useGetMessages', () => {
  const fakeParams = {
    token: '123456',
    category: 'category',
    direction: '+1' as Direction,
  };

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

  it('should clear state ti initial value', () => {
    const { result } = renderHook(() => useGetMessages());

    act(() => {
      result.current.setMessageList(
        fakeParams.token,
        fakeParams.category,
        fakeParams.direction,
      );
      console.log(result.current.state);
    });
    expect(result.current.state).toEqual(nullMessageDataState);
  });

  // it('should update state forward', () => {});

  // it('should clear state', () => {});
});
