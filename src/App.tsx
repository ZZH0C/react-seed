import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MessagePage } from './pages/MessagePage/MessagePage';

export const App: React.FC = () => {
  return (
    <>
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
    </>
  );
};
