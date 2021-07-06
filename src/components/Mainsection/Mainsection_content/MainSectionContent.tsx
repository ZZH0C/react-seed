import React from 'react';
import { MainSectionContentHeading } from './Mainsection_content_heading/MainSectionContentHeading';
import { MainSectionContentSearchbar } from './Mainsection_content_searchbar/MainSectionContentSearchBar';
import { MainSectionContentPosts } from './Mainsection_content_items_container/MainSectionContentPosts';
type MainSectionContentProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionContent: React.FC<MainSectionContentProps> = () => {
  return (
    <section className="mainSection">
      <MainSectionContentHeading />
      <MainSectionContentSearchbar />
      <MainSectionContentPosts />
    </section>
  );
};
