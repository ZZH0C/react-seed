import React from 'react';

import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { NavbarItem } from '../../components/NavbarItem/NavbarItem';
import { HeaderLogo } from '../../components/HeaderLogo/HeaderLogo';
import { HeaderUser } from '../../components/HeaderUser/HeaderUser';
import { SubmenuItem } from '../../components/Submenu/SubmenuItem/SubmenuItem';
import { testProps_logo } from '../../components/mockProps';
import { SubmenuSubItem } from '../../components/Submenu/SubmenuSubItem/SubmenuSubItem';
import { HeaderUserIcons } from '../../components/HeaderUserIcons/HeaderUserIcons';
import { Submenu } from '../../components/Submenu/Submenu';
import { MainSection } from '../../components/MainSection/MainSection';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  GoogleLogout,
} from 'react-google-login';
import { useUserContext } from '../../hooks/useUserContext';
import { useUserData } from '../../hooks/useUserData';
import {
  clientId,
  emptyProfilePictureSrc,
  SubItemCategories,
  categoryContainer,
  navBarLabels,
} from '../../components/config';
export const UserContext = useUserContext;
export const HomePage: React.FC = () => {
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

  const subItems = SubItemCategories.map((subItemProps) => {
    return (
      <SubmenuSubItem
        key={Math.random()}
        href={subItemProps.href}
        name={subItemProps.name}
        category={subItemProps.category}
        // isActive={false}
      >
        {subItemProps.name}
      </SubmenuSubItem>
    );
  });
  const navBarItems = navBarLabels.map((navBarItemProps) => {
    return (
      <NavbarItem
        key={Math.random()}
        href={navBarItemProps.href}
        name={navBarItemProps.name}
        label={navBarItemProps.label}
      >
        {navBarItemProps.name}
      </NavbarItem>
    );
  });

  return (
    <section>
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
        <Head>
          <HeaderLogo
            mobileImgSrc={testProps_logo.mobileImgSrc}
            mobileImgAlc={testProps_logo.mobileImgAlc}
            desktopImgSrc={testProps_logo.desktopImgSrc}
            desktopImgAlt={testProps_logo.desktopImgAlt}
          >
            Page Title
          </HeaderLogo>
          <HeaderUser src={emptyProfilePictureSrc}>
            <HeaderUserIcons classname={'icon-bell'} />
            <HeaderUserIcons classname={'icon-mail'} />
          </HeaderUser>
        </Head>
        <Navbar>{navBarItems}</Navbar>
        <MainContainer>
          <Submenu>
            <SubmenuItem name={categoryContainer.name}>{subItems}</SubmenuItem>
          </Submenu>
          <MainSection />
        </MainContainer>
      </UserContext.Provider>
    </section>
  );
};
