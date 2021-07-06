import React from 'react';
import { MainSectionContentItem } from './Mainsection_content_post/MainSectionContentItem';
import { MainSectionContentFooter } from './Mainsection_content_footer/MainSectionContentFooter';
type MainSectionContentPostsProps = React.HTMLAttributes<HTMLElement>;

export const MainSectionContentPosts: React.FC<MainSectionContentPostsProps> =
  () => {
    const examplePosts = [
      {
        user: 'username 1',
        userPicture: 'images/member1.png',
        userStatus: 'pro',
        title: 'Item title 1',
        isRead: false,
        dateTime: '2015-06-14T09:24:17Z',
        text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
        comments: 2,
        tags: ['tag 1', 'tag 2', 'tag 3'],
      },
      {
        user: 'username 2',
        userPicture: 'images/member2.png',
        userStatus: 'member',
        title: 'Item title 2',
        isRead: true,
        dateTime: '2015-06-14T09:24:17Z',
        text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
        comments: 4,
        tags: ['tag 1', 'tag 2', 'tag 3'],
      },
      {
        user: 'username 2',
        userPicture: 'images/member2.png',
        userStatus: 'member',

        title: 'Item title 2',
        isRead: true,
        dateTime: '2015-06-14T09:24:17Z',
        text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
        comments: 4,
        tags: ['tag 1', 'tag 2', 'tag 3'],
      },
      {
        user: 'username 2',
        userPicture: 'images/member2.png',
        userStatus: 'member',
        title: 'Item title 2',
        isRead: true,
        dateTime: '2015-06-14T09:24:17Z',
        text: 'Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.',
        comments: 4,
        tags: ['tag 1', 'tag 2', 'tag 3'],
      },
    ];
    const items = examplePosts.map((elem) => {
      return (
        <MainSectionContentItem
          key={Math.random()}
          user={elem.user}
          userPicture={elem.userPicture}
          userStatus={elem.userStatus}
          title={elem.title}
          isRead={elem.isRead}
          dateTime={elem.dateTime}
          text={elem.text}
          comments={elem.comments}
          tags={elem.tags}
        />
      );
    });
    return (
      <section className="postsContainer">
        {items}
        <div className="controlButtons">
          <a href="index.html" className="btn btn-default btn-prevNext">
            <i className="icon-left-open-big"></i>Previous
          </a>
          <a href="index.html" className="btn btn-default btn-prevNext">
            Next
            <i className="icon-right-open-big"></i>
          </a>
        </div>
        <MainSectionContentFooter />
      </section>
    );
  };
