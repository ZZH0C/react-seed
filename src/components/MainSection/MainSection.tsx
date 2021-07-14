import React from 'react';
import { useCreateMessagesUi } from '../../hooks/useCreateMessagesUi';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const messages = useCreateMessagesUi();
  return <section className="mainSection">{messages}</section>;
};
