import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { MessageItem } from './MessageItem';
import React from 'react';

const useFakeContext_true = jest.fn().mockImplementation(() => {
  return {
    accessToken: 'FAKE_TOKEN',
  };
});
const useFakeContext_false = jest.fn().mockImplementation(() => {
  return {};
});

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

  it('should render with valid data and match snapshot', () => {
    React.useContext = useFakeContext_true;
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
    expect(useFakeContext_true).toBeCalledTimes(1);
  });
  it('should render with wrong data and match snapshot', () => {
    React.useContext = useFakeContext_false;
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
    expect(useFakeContext_false).toBeCalledTimes(1);
  });
});
