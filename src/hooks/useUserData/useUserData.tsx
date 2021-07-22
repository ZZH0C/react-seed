import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useCallback, useMemo, useReducer } from 'react';

type UserState = GoogleLoginResponse | GoogleLoginResponseOffline | null;

interface LoginState {
  userData: UserState;
  isLogged: boolean;
}

function reducer(
  state: LoginState,
  action: { type: string; user?: UserState | null },
): LoginState {
  switch (action.type) {
    case 'logIn':
      return {
        ...state,
        userData: action.user as UserState | null,
        isLogged: !!action.user,
      };
    case 'logOut':
      return {
        ...state,
        userData: null,
        isLogged: false,
      };
    default:
      throw new Error();
  }
}

const initialState: LoginState = { userData: null, isLogged: false };

export const useUserData = (): {
  logoutCallback: () => void;
  state: any;
  loginCallback: (user: any) => void;
} => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loginCallback = useCallback(
    (user) => {
      dispatch({ type: 'logIn', user });
    },
    [dispatch],
  );
  const logoutCallback = useCallback(() => {
    dispatch({ type: 'logOut' });
  }, [dispatch]);
  return useMemo(
    () => ({
      state,
      loginCallback,
      logoutCallback,
    }),
    [loginCallback, logoutCallback, state],
  );
};
