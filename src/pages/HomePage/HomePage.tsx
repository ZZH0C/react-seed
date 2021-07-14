import React from 'react';

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
import { Submenu } from '../../components/Submenu/Submenu';
import { MainSection } from '../../components/MainSection/MainSection';

const emptyProfilePictureSrc =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

export const HomePage: React.FC = () => {
  return (
    <section>
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
        <MainSection />
      </MainContainer>
    </section>
  );
};
