import React from 'react';
type MainSectionContentHeadingProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionContentHeading: React.FC<MainSectionContentHeadingProps> =
  () => {
    return (
      <div className="heading">
        <h1>Page title in</h1>
      </div>
    );
  };
