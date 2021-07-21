import { configure, shallow } from 'enzyme';
import { MessagePage } from './MessagePage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

// import { useLocation } from 'react-router-dom';
// import { mocked } from 'ts-jest/utils';

// jest.mock('../../hooks/useQueryParams/useQueryParams');
// mocked(useLocation).mockImplementation(() => {
//   return {
//     pathname: '',
//     search: '',
//     hash: '',
//     state: {
//       id: 'someId',
//       token: 'someToken',
//     },
//   };
// });

jest.mock('react-router-dom', () => {
  const useLocation = () => {
    return {
      pathname: '',
      search: '',
      hash: '',
      state: {
        id: 'someId',
        token: 'someToken',
      },
    };
  };
  return { useLocation };
});

describe('components/MessagePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    expect(shallow(<MessagePage />)).toMatchSnapshot();
  });

  // it('should render', () => {
  //   shallow(<MessagePage />);
  //   expect(testLocation).toBeCalledTimes(2);
  // });
});
