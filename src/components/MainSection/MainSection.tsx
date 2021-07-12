import React from 'react';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return <section className="mainSection">{children}</section>;
};
