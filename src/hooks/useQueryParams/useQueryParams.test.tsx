import { act, renderHook } from '@testing-library/react-hooks';

import { useQueryParams } from './useQueryParams';

const fakeLocation = {
  pathname: '/',
  search: '?in=FAKE_IN',
  hash: '',
  state: {
    id: 'someId',
    token: 'someToken',
  },
};
jest.mock('react-router-dom', () => {
  const useLocation = () => fakeLocation;
  return { useLocation };
});
describe('hooks/useQueryParams', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should parse incoming params and return result', () => {
    const callResult = {
      isActive: false,
      parsedParams: 'category=FAKE_CATEGORY&in=FAKE_IN',
    };

    const { result } = renderHook(() => useQueryParams());
    act(() => {
      expect(result.current.changeParams('FAKE_CATEGORY', 'category')).toEqual(
        callResult,
      );
    });
  });

  it('should return query params', () => {
    const { result } = renderHook(() => useQueryParams());
    act(() => {
      expect(result.current.getGoogleQueryParams()).toEqual('in:FAKE_IN');
    });
  });
});
