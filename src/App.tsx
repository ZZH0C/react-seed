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
import {
  categoryContainer,
  clientId,
  emptyProfilePictureSrc,
  logoProps,
  navBarLabels,
  SubItemCategories,
} from './components/config';
import { useUserData } from './hooks/useUserData/useUserData';
import { useUserContext } from './hooks/useUserContext/useUserContext';
import { Modal } from './components/Modal/Modal';
import { SubmenuSubItem } from './components/Submenu/SubmenuSubItem/SubmenuSubItem';
import { NavbarItem } from './components/NavbarItem/NavbarItem';
import { Head } from './components/Head/Head';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderUser } from './components/HeaderUser/HeaderUser';
import { HeaderUserIcons } from './components/HeaderUserIcons/HeaderUserIcons';
import { Navbar } from './components/Navbar/Navbar';
import { Submenu } from './components/Submenu/Submenu';
import { SubmenuItem } from './components/Submenu/SubmenuItem/SubmenuItem';
import { MainContainer } from './components/MainContainer/MainContainer';
import styles from './styles/App.module.scss';
import classNames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const UserContext = useUserContext;

export const App: React.FC = () => {
  const { state, logoutCallback, loginCallback } = useUserData();
  const responseFailure = (resp: { error: string }) => {
    // TODO: add error handler
    throw new Error(resp.error);
  };

  const subItems = SubItemCategories.map((subItemProps, index) => {
    return (
      <SubmenuSubItem
        key={index}
        href={subItemProps.href}
        name={subItemProps.name}
        category={subItemProps.category}
      >
        {subItemProps.name}
      </SubmenuSubItem>
    );
  });
  const navBarItems = navBarLabels.map((navBarItemProps, index) => {
    return (
      <NavbarItem
        key={index}
        href={navBarItemProps.href}
        name={navBarItemProps.name}
        label={navBarItemProps.label}
      >
        {navBarItemProps.name}
      </NavbarItem>
    );
  });

  return (
    <>
      <UserContext.Provider value={state.userData}>
        <Router>
          <section>
            <Head>
              <HeaderLogo
                mobileImgSrc={logoProps.mobileImgSrc}
                mobileImgAlc={logoProps.mobileImgAlc}
                desktopImgSrc={logoProps.desktopImgSrc}
                desktopImgAlt={logoProps.desktopImgAlt}
              />
              <HeaderUser src={emptyProfilePictureSrc}>
                <HeaderUserIcons classname={'icon-bell'} />
                <HeaderUserIcons classname={'icon-mail'} />
                {!state.isLogged ? (
                  <GoogleLogin
                    scope="https://mail.google.com"
                    clientId={clientId}
                    buttonText="Login"
                    render={(renderProps) => (
                      <button
                        className={classNames(styles.modal_open_button)}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Login
                      </button>
                    )}
                    onSuccess={loginCallback}
                    onFailure={responseFailure}
                  />
                ) : (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    render={(renderProps) => (
                      <button
                        className={classNames(styles.modal_open_button)}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Logout
                      </button>
                    )}
                    onLogoutSuccess={logoutCallback}
                  />
                )}
              </HeaderUser>
            </Head>
            <Navbar>{navBarItems}</Navbar>
            <MainContainer>
              <Submenu>
                <SubmenuItem name={categoryContainer.name}>
                  {subItems}
                </SubmenuItem>
              </Submenu>
              <Switch>
                <Route path="/home">
                  <HomePage />
                </Route>
                <Route path="/message">
                  <MessagePage />
                </Route>
                <Redirect from="*" to="/home" />
              </Switch>
              <Route
                render={({ location }) => {
                  const { key } = location;

                  return (
                    <TransitionGroup component={null}>
                      <CSSTransition
                        timeout={500}
                        classNames={{
                          enterActive: classNames(styles.portal_enter_active),
                          exitActive: classNames(styles.portal_exit_active),
                        }}
                        key={key}
                      >
                        <Switch location={location}>
                          <Route
                            exact
                            path="/home/add"
                            render={() => <Modal backUrl="/home" />}
                          />
                        </Switch>
                      </CSSTransition>
                    </TransitionGroup>
                  );
                }}
              />
            </MainContainer>
          </section>
        </Router>
      </UserContext.Provider>
    </>
  );
};
