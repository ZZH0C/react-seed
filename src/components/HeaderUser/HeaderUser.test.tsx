import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderUser } from './HeaderUser';
import React from 'react';

const useFakeContextTrue = jest.fn().mockImplementation(() => {
  return {
    profileObj: {
      name: '',
      imageUrl: '',
    },
  };
});

const useFakeContextFalse = jest.fn().mockImplementation(() => {
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
  //TODO: fix this context mock with https://enzymejs.github.io/enzyme/docs/api/shallow.html
  it('should render and match snapshot', () => {
    React.useContext = useFakeContextTrue;
    expect(
      shallow(
        <HeaderUser src={mockProps.href}>{mockProps.children}</HeaderUser>,
      ),
    ).toMatchSnapshot();
    expect(useFakeContextTrue).toBeCalledTimes(1);
  });
  it('should render and match snapshot', () => {
    React.useContext = useFakeContextFalse;
    expect(
      shallow(
        <HeaderUser src={mockProps.href}>{mockProps.children}</HeaderUser>,
      ),
    ).toMatchSnapshot();
    expect(useFakeContextFalse).toBeCalledTimes(1);
  });
});
