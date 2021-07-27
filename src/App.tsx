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
import { Modal } from './components/Modal/Modal';

export const UserContext = useUserContext;

export const App: React.FC = () => {
  const { state, logoutCallback, loginCallback } = useUserData();
  const responseFailure = (resp: { error: string }) => {
    // TODO: add error handler
    throw new Error(resp.error);
  };

  return (
    <>
      <UserContext.Provider value={state.userData}>
        <GoogleLogin
          scope="https://mail.google.com"
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
          <Switch>
            <Route exact path="/home/add">
              <Modal backUrl="/home" />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
};
