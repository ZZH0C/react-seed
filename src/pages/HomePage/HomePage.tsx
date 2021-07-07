import React from 'react';
import { Button } from '../../components/Button/Button';
import { Head } from '../../components/Head/Head';
import { Navbar } from '../../components/Navbar/Navbar';
import { MainSection } from '../../components/MainSection/MainSection';

export const HomePage: React.FC = () => {
  return (
    <section>
      <Button styleType="primary">Ok!</Button>
      <Head />
      <Navbar />
      <MainSection />
    </section>
  );
};
