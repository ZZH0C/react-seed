import React from 'react';

import { Head } from '../Head/Head';
import { Navbar } from '../Navbar/Navbar';
import { MainContainer } from '../MainContainer/MainContainer';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { HeaderUser } from '../HeaderUser/HeaderUser';
import { SubmenuItem } from '../Submenu/SubmenuItem/SubmenuItem';
import { SubmenuSubItem } from '../Submenu/SubmenuSubItem/SubmenuSubItem';
import { HeaderUserIcons } from '../HeaderUserIcons/HeaderUserIcons';
import { Submenu } from '../Submenu/Submenu';
import { useUserContext } from '../../hooks/useUserContext/useUserContext';
import {
  emptyProfilePictureSrc,
  SubItemCategories,
  categoryContainer,
  navBarLabels,
  logoProps,
} from '../config';
export const UserContext = useUserContext;
export const Main: React.FC = ({ children }) => {
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
    <section>
      <Head>
        <HeaderLogo
          mobileImgSrc={logoProps.mobileImgSrc}
          mobileImgAlc={logoProps.mobileImgAlc}
          desktopImgSrc={logoProps.desktopImgSrc}
          desktopImgAlt={logoProps.desktopImgAlt}
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
        {children}
      </MainContainer>
    </section>
  );
};
