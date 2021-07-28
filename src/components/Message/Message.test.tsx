import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Message } from './Message';

describe('components/ButtonLink', () => {
  const mockProps = {
    from: 'SOME_USER',
    title: 'SOME_TITLE',
    text: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(
        <Message
          from={mockProps.from}
          title={mockProps.title}
          text={mockProps.text}
        >
          {mockProps.text}
        </Message>,
      ),
    ).toMatchSnapshot();
  });
  it('should render without text and match snapshot', () => {
    expect(
      shallow(
        <Message
          from={mockProps.from}
          title={mockProps.title}
          text={mockProps.text}
        />,
      ),
    ).toMatchSnapshot();
  });
});
