import React from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

type UserState = GoogleLoginResponse | GoogleLoginResponseOffline | null;

interface LoginState {
  userData: UserState;
  isLogged: boolean;
}
const initialState: LoginState = { userData: null, isLogged: false };

export const useUserContext = React.createContext<UserState>(
  initialState.userData,
);
