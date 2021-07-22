import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MessagePage } from './pages/MessagePage/MessagePage';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { clientId } from './components/config';
import { useUserData } from './hooks/useUserData/useUserData';
import { useUserContext } from './hooks/useUserContext/useUserContext';
export const UserContext = useUserContext;

export const App: React.FC = () => {
  const { state, logoutCallback, loginCallback } = useUserData();

  // const responseGoogle = (
  //   response: GoogleLoginResponse | GoogleLoginResponseOffline,
  // ) => {
  //   loginCallback(response);
  // };
  const responseFailure = (resp: { error: string }) => {
    console.error(resp);
    // TODO: add error handler
    throw new Error(resp.error);
  };
  // const logout = () => {
  //   logoutCallback();
  // };

  return (
    <>
      <UserContext.Provider value={state.userData}>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={loginCallback}
          onFailure={responseFailure}
          disabled={state.isLogged}
          disabledStyle={{ display: 'none' }}
        />
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={logoutCallback}
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
