import { configure, shallow } from 'enzyme';
import { MessagePage } from './MessagePage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { loadOneMessage } from '../../api/userMessages/userMessages';
import { mocked } from 'ts-jest/utils';
import { GoogleMessage } from '../../models/GoogleMessage';

const mockResponse: GoogleMessage = {
  value: {} as GoogleMessage,
  id: 'SOME_ID',
  snippet: 'SOME_SNIPPET',
  payload: {
    headers: [{ name: 'SOME_NAME', value: 'SOME_VALUE' }],
    parts: [
      {
        body: { data: 'SOME_DATA' },
      },
    ],
  },
};

jest.mock('../../api/userMessages/userMessages');
mocked(loadOneMessage).mockImplementation(() => {
  return Promise.resolve(mockResponse);
});
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

  // TODO:
  // it('should render and call loadOneMessage', () => {
  //   shallow(<MessagePage />);
  // expect(loadOneMessage).toBeCalledTimes(1);
  // });
});
