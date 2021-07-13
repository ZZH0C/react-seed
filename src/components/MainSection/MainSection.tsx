import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useGetMessages } from '../../hooks/useGetMessages';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const userData = useContext(UserContext);
  const { setMessageList, state } = useGetMessages();
  // const [state, setState] = useState([]);

  const messages: any[] = [];

  useEffect(() => {
    if (userData !== null) {
      if ('accessToken' in userData) {
        const token = userData.accessToken;
        setMessageList(token);
        console.log(state);

        // setState(QQ);
      }
    }
  }, [userData]);

  return <section className="mainSection">{messages}</section>;
};
