import React from 'react';
import { Button } from '../../components/Button/Button';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainSection } from '../../components/Mainsection/MainSection';
import { NavbarItem } from '../../components/NavbarItem/NavbarItem';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { HeaderUser } from '../../components/HeaderUser/HeaderUser';
import { SubmenuItem } from '../../components/Submenu/SubmenuItem/SubmenuItem';
import {
  testProps_subItemOn,
  testProps_subItemOff,
  testPropsNavBarOn,
  testPropsNavBarOff,
  testProps_UserIcon,
  testProps_logo,
} from '../../components/mockProps';
import { SubmenuSubItem } from '../../components/Submenu/SubmenuSubItem/SubmenuSubItem';
import { HeaderUserIcons } from '../../components/HeaderUserIcons/HeaderUserIcons';
import { useSetUserData } from '../../hooks/useSetUserData';

type UserState = GoogleLoginResponse | GoogleLoginResponseOffline | null;

interface LoginState {
  userData: UserState;
  isLogged: boolean;
}
const initialState: LoginState = { userData: null, isLogged: false };

export const UserContext = React.createContext<UserState>(
  initialState.userData,
);

export const HomePage: React.FC = () => {
  const { state, dispatch } = useSetUserData();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('profileObj' in response) {
      dispatch({ type: 'logIn', user: response, isLogged: true });
    }
  };

  const logout = () => {
    dispatch({ type: 'logOut', user: null, isLogged: false });
  };

  return (
    <UserContext.Provider value={state.userData}>
      <section>
        <GoogleLogin
          clientId="386327906890-ce0q1vn2cja1ellekvjj6hmqah4g901c.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          disabled={state.isLogged}
          disabledStyle={{ display: 'none' }}
        />
        <GoogleLogout
          clientId={
            '386327906890-ce0q1vn2cja1ellekvjj6hmqah4g901c.apps.googleusercontent.com'
          }
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={logout}
          disabled={!state.isLogged}
          disabledStyle={{ display: 'none' }}
        />
        <Button
          styleType="primary"
          onClick={() => {
            console.log(state);
          }}
        >
          Check login
        </Button>
        <Head>
          <HeaderLogo
            mobileImgSrc={testProps_logo.mobileImgSrc}
            mobileImgAlc={testProps_logo.mobileImgAlc}
            desktopImgSrc={testProps_logo.desktopImgSrc}
            desktopImgAlt={testProps_logo.desktopImgAlt}
          >
            Page Title
          </HeaderLogo>
          <HeaderUser src={testProps_UserIcon.src} alt={testProps_UserIcon.alt}>
            <HeaderUserIcons classname={'icon-bell'} />
            <HeaderUserIcons classname={'icon-mail'} />
          </HeaderUser>
        </Head>
        <Navbar>
          <NavbarItem isActive={testPropsNavBarOff.isActive}>
            {testPropsNavBarOff.content}
          </NavbarItem>
          <NavbarItem isActive={testPropsNavBarOff.isActive}>
            {testPropsNavBarOff.content}
          </NavbarItem>
          <NavbarItem isActive={testPropsNavBarOn.isActive}>
            {testPropsNavBarOn.content}
          </NavbarItem>
        </Navbar>
        <MainSection>
          <SubmenuItem name={'Item 1'}>
            <SubmenuSubItem
              href={testProps_subItemOff.href}
              name={testProps_subItemOff.name}
              isActive={testProps_subItemOff.active}
            >
              {testProps_subItemOff.name}
            </SubmenuSubItem>{' '}
            <SubmenuSubItem
              href={testProps_subItemOff.href}
              name={testProps_subItemOff.name}
              isActive={testProps_subItemOff.active}
            >
              {testProps_subItemOff.name}
            </SubmenuSubItem>
          </SubmenuItem>
          <SubmenuItem name={'Item 2'}>
            <SubmenuSubItem
              href={testProps_subItemOff.href}
              name={testProps_subItemOff.name}
              isActive={testProps_subItemOff.active}
            >
              {testProps_subItemOff.name}
            </SubmenuSubItem>
          </SubmenuItem>
          <SubmenuItem name={'Item 3'}>
            <SubmenuSubItem
              href={testProps_subItemOn.href}
              name={testProps_subItemOn.name}
              isActive={testProps_subItemOn.active}
            >
              {testProps_subItemOn.name}
            </SubmenuSubItem>
          </SubmenuItem>
          <SubmenuItem name={'Item 4'}>
            <SubmenuSubItem
              href={testProps_subItemOff.href}
              name={testProps_subItemOff.name}
              isActive={testProps_subItemOff.active}
            >
              {testProps_subItemOff.name}
            </SubmenuSubItem>
          </SubmenuItem>
          <SubmenuItem name={'Item 5'}>
            <SubmenuSubItem
              href={testProps_subItemOff.href}
              name={testProps_subItemOff.name}
              isActive={testProps_subItemOff.active}
            >
              {testProps_subItemOff.name}
            </SubmenuSubItem>
          </SubmenuItem>
        </MainSection>
      </section>
    </UserContext.Provider>
  );
};
