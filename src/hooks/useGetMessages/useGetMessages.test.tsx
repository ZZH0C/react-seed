// import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useGetMessages } from './useGetMessages';
import { nullMessageDataState } from './useGetMessages';

// import { loadMessages } from '../../api/userMessages/userMessages';
// import { mocked } from 'ts-jest/utils';
// jest.mock('../../api/userMessages/userMessages');
// mocked(loadMessages).mockImplementation(() => {
//   return {
//     list: [[], [], []],
//     nextPageToken: null,
//   };
// });

describe('hooks/useGetMessages', () => {
  it('should set initial state', () => {
    const { result } = renderHook(() => useGetMessages());
    expect(result.current.state).toEqual(nullMessageDataState);
  });

  it('should clear state ti initial value', () => {
    const { result } = renderHook(() => useGetMessages());

    act(() => {
      result.current.clearMessageList();
    });
    expect(result.current.state).toEqual(nullMessageDataState);
  });

  // it('should update state forward', () => {});

  // it('should clear state', () => {});
});
