import React from 'react';
import { Button } from '../../components/Button/Button';
import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainSection } from '../../components/MainSection/MainSection';
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
} from '../../components/mockProps';
import { SubmenuSubItem } from '../../components/Submenu/SubmenuSubItem/SubmenuSubItem';

export const HomePage: React.FC = () => {
  return (
    <section>
      <Button styleType="primary">Ok!</Button>
      <Head>
        <HeaderLogo />
        <HeaderUser src={testProps_UserIcon.src} alt={testProps_UserIcon.alt} />
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
  );
};
