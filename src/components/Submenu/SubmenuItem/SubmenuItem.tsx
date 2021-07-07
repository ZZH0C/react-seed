import React from 'react';

interface MainSectionSubmenuItemProps
  extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export const SubmenuItem: React.FC<MainSectionSubmenuItemProps> = ({
  name,
  children,
}) => {
  return (
    <section className="submenuSection">
      <h4 className="submenuCategory">{name}</h4>
      <ul className="nav">{children}</ul>
    </section>
  );
};
