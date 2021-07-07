import React from 'react';

type HeadProps = React.HTMLAttributes<HTMLElement>;

export const Head: React.FC<HeadProps> = ({ children }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </header>
  );
};
