import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { MessageItem } from './MessageItem';

describe('components/ButtonLink', () => {
  const mockProps = {
    from: 'SOME_USER',
    date: '11-03-1996',
    id: 'FAKE_ID',
    title: 'SOME_TITLE',
    snippet: 'SOME_TEXT',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(
        <MessageItem
          fromWho={mockProps.from}
          messageDate={mockProps.date}
          messageId={mockProps.id}
          messageSnippet={mockProps.snippet}
          messageTitle={mockProps.title}
        />,
      ),
    ).toMatchSnapshot();
  });
});
