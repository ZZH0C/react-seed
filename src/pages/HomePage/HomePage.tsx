import React from 'react';
import { Button } from '../../components/Button/Button';
import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainSection } from '../../components/MainSection/MainSection';
import { NavbarItem } from '../../components/NavbarItem/NavbarItem';

export const HomePage: React.FC = () => {
  return (
    <section>
      <Button styleType="primary">Ok!</Button>
      <Head />
      <Navbar>
        <NavbarItem isActive={false}>123</NavbarItem>
        <NavbarItem isActive={false}>444</NavbarItem>
        <NavbarItem isActive={true}>555</NavbarItem>
      </Navbar>
      <MainSection />
    </section>
  );
};
