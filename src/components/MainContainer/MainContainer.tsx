import React from 'react';
type MainContainerProps = React.HTMLAttributes<HTMLElement>;

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main className="container main">{children}</main>;
};
