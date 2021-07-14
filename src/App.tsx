import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MessagePage } from './pages/MessagePage/MessagePage';
import { useUserContext } from './hooks/useUserContext';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { useUserData } from './hooks/useUserData';

export const UserContext = useUserContext;
const clientId =
  '386327906890-ce0q1vn2cja1ellekvjj6hmqah4g901c.apps.googleusercontent.com';

export const App: React.FC = () => {
  const { state, dispatch } = useUserData();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('profileObj' in response) {
      dispatch({ type: 'logIn', user: response, isLogged: true });
    }
  };
  const responseFailure = (resp: { error: string }) => {
    console.log(resp);
    // TODO: add error handler
    throw new Error(resp.error);
  };
  const logout = () => {
    dispatch({ type: 'logOut', user: null, isLogged: false });
  };

  return (
    <>
      <UserContext.Provider value={state.userData}>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseFailure}
          disabled={state.isLogged}
          disabledStyle={{ display: 'none' }}
        />
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={logout}
          disabled={!state.isLogged}
          disabledStyle={{ display: 'none' }}
        />
        <Router>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/message">
              <MessagePage />
            </Route>
            <Redirect from="*" to="/home" />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
};
