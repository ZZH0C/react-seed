import React from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { NavbarItem } from '../../components/NavbarItem/NavbarItem';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { HeaderUser } from '../../components/HeaderUser/HeaderUser';
import { SubmenuItem } from '../../components/Submenu/SubmenuItem/SubmenuItem';
import {
  testProps_subItemOn,
  testProps_subItemOff,
  testPropsNavBarOn,
  testPropsNavBarOff,
  testProps_logo,
} from '../../components/mockProps';
import { SubmenuSubItem } from '../../components/Submenu/SubmenuSubItem/SubmenuSubItem';
import { HeaderUserIcons } from '../../components/HeaderUserIcons/HeaderUserIcons';
import { useUserData } from '../../hooks/useUserData';
import { useUserContext } from '../../hooks/useUserContext';
import { Submenu } from '../../components/Submenu/Submenu';
import { MainSection } from '../../components/MainSection/MainSection';
const clientId =
  '386327906890-ce0q1vn2cja1ellekvjj6hmqah4g901c.apps.googleusercontent.com';
export const UserContext = useUserContext;

export const HomePage: React.FC = () => {
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
    <UserContext.Provider value={state.userData}>
      <section>
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
        <Head>
          <HeaderLogo
            mobileImgSrc={testProps_logo.mobileImgSrc}
            mobileImgAlc={testProps_logo.mobileImgAlc}
            desktopImgSrc={testProps_logo.desktopImgSrc}
            desktopImgAlt={testProps_logo.desktopImgAlt}
          >
            Page Title
          </HeaderLogo>
          <HeaderUser>
            <HeaderUserIcons classname={'icon-bell'} />
            <HeaderUserIcons classname={'icon-mail'} />
          </HeaderUser>
        </Head>
        <Navbar>
          <NavbarItem isActive={testPropsNavBarOff.isActive}>
            {testPropsNavBarOff.content}
          </NavbarItem>
          <NavbarItem isActive={testPropsNavBarOn.isActive}>
            {testPropsNavBarOn.content}
          </NavbarItem>
        </Navbar>
        <MainContainer>
          <Submenu>
            <SubmenuItem name={testProps_subItemOn.name}>
              <SubmenuSubItem
                href={testProps_subItemOn.href}
                name={testProps_subItemOn.name}
                isActive={testProps_subItemOn.active}
              >
                {testProps_subItemOn.name}
              </SubmenuSubItem>
            </SubmenuItem>
            <SubmenuItem name={testProps_subItemOff.name}>
              <SubmenuSubItem
                href={testProps_subItemOff.href}
                name={testProps_subItemOff.name}
                isActive={testProps_subItemOff.active}
              >
                {testProps_subItemOff.name}
              </SubmenuSubItem>
            </SubmenuItem>
          </Submenu>
          <MainSection></MainSection>
        </MainContainer>
      </section>
    </UserContext.Provider>
  );
};
