import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { useReducer } from 'react';

type UserState = GoogleLoginResponse | GoogleLoginResponseOffline | null;

interface LoginState {
  userData: UserState;
  isLogged: boolean;
}

function reducer(
  state: LoginState,
  action: { type: string; user: UserState | null; isLogged: boolean },
): LoginState {
  switch (action.type) {
    case 'logIn':
      return {
        userData: action.user as UserState | null,
        isLogged: action.isLogged,
      };
    case 'logOut':
      return {
        userData: action.user as UserState | null,
        isLogged: action.isLogged,
      };
    default:
      throw new Error();
  }
}

const initialState: LoginState = { userData: null, isLogged: false };

export const useUserData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
