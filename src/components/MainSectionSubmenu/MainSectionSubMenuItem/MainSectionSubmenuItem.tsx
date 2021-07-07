import React from 'react';

interface MainSectionSubmenuItemProps
  extends React.HTMLAttributes<HTMLElement> {
  name: string;
  content: { name: string; href: string; active?: boolean }[];
}

export const MainSectionSubmenuItem: React.FC<MainSectionSubmenuItemProps> = (
  props,
) => {
  const subItems = props.content.map(
    (elem: { href?: string; name?: string; active?: boolean }) => {
      return (
        <li key={Math.random()}>
          <a
            href={elem.href}
            title={elem.name}
            className={elem.active ? 'active' : ''}
          >
            {elem.name}
          </a>
        </li>
      );
    },
  );
  return (
    <section className="submenuSection">
      <h4 className="submenuCategory">{props.name}</h4>
      <ul className="nav">{subItems}</ul>
    </section>
  );
};
