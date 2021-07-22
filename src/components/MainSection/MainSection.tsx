import React from 'react';
import { useCreateMessagesUi } from '../../hooks/useCreateMessagesUi/useCreateMessagesUi';
import { SearchBar } from '../SearchBar/SearchBar';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const messages = useCreateMessagesUi();
  return (
    <section className="mainSection">
      <SearchBar />
      {messages}
    </section>
  );
};
