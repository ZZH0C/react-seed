import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MessagePage } from './pages/MessagePage/MessagePage';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { clientId } from './components/config';
import { useUserData } from './hooks/useUserData';
import { useUserContext } from './hooks/useUserContext';
export const UserContext = useUserContext;

export const App: React.FC = () => {
  const { state, dispatch } = useUserData();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('profileObj' in response) {
      dispatch({ type: 'logIn', user: response });
    }
  };
  const responseFailure = (resp: { error: string }) => {
    console.log(resp);
    // TODO: add error handler
    throw new Error(resp.error);
  };
  const logout = () => {
    dispatch({ type: 'logOut' });
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
            <Redirect from="*" to="/home?category=inbox&label=primary" />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
};
