import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderUser } from './HeaderUser';
import React from 'react';

const useFakeContext_true = jest.fn().mockImplementation(() => {
  return {
    profileObj: {
      name: '',
      imageUrl: '',
    },
  };
});
const useFakeContext_false = jest.fn().mockImplementation(() => {
  return {};
});

describe('components/ButtonLink', () => {
  const mockProps = {
    href: '/',
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    React.useContext = useFakeContext_true;
    expect(
      shallow(
        <HeaderUser src={mockProps.href}>{mockProps.children}</HeaderUser>,
      ),
    ).toMatchSnapshot();
    expect(useFakeContext_true).toBeCalledTimes(1);
  });
  it('should render and match snapshot', () => {
    React.useContext = useFakeContext_false;
    expect(
      shallow(
        <HeaderUser src={mockProps.href}>{mockProps.children}</HeaderUser>,
      ),
    ).toMatchSnapshot();
    expect(useFakeContext_false).toBeCalledTimes(1);
  });
});
