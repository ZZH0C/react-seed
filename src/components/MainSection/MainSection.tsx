import React, { useContext, useEffect, useState } from 'react';
import { useCreateMessagesUi } from '../../hooks/useCreateMessagesUi/useCreateMessagesUi';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './MainSection.module.scss';
import classNames from 'classnames';
import { UserContext } from '../../pages/HomePage/HomePage';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const userData = useContext(UserContext);
  const [hiddenStyle, setHiddenStyle] = useState(styles.hidden);
  useEffect(() => {
    if (userData) {
      setHiddenStyle('');
    } else {
      setHiddenStyle(styles.hidden);
    }
  }, [userData]);
  const messages = useCreateMessagesUi();
  return (
    <section className={classNames(hiddenStyle, 'mainSection')}>
      <SearchBar />
      {messages}
    </section>
  );
};
