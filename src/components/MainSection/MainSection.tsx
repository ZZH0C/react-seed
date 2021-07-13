import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../pages/HomePage/HomePage';
import { useGetMessages } from '../../hooks/useGetMessages';
import { MessageItem } from '../MessageItem/MessageItem';
type MainSectionProps = React.HTMLAttributes<HTMLElement>;

export const MainSection: React.FC<MainSectionProps> = () => {
  const userData = useContext(UserContext);
  const { setMessageList, state } = useGetMessages();
  // const [state, setState] = useState([]);

  const messages: any[] = [];

  useEffect(() => {
    if (userData && 'accessToken' in userData) {
      const token = userData.accessToken;
      setMessageList(token);
    }
    if (!userData) {
      setMessageList(null);
    }
  }, [userData]);

  if (state.length > 0) {
    state.forEach((e: any) => {
      const props = {
        from: '',
        snippet: e.value.snippet,
        title: '',
      };
      e.value.payload.headers.forEach((e: { name: string; value: string }) => {
        if (e.name === 'From') props.from = e.value;
        if (e.name === 'Subject') props.title = e.value;
      });

      console.log(e);
      messages.push(
        <MessageItem
          key={Math.random()}
          fromWho={props.from}
          messageSnippet={props.snippet}
          messageTitle={props.title}
        />,
      );
    });
  }

  return <section className="mainSection">{messages}</section>;
};
