import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Head } from './Head';

describe('components/Head', () => {
  const mockProps = {
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(shallow(<Head>{mockProps.children}</Head>)).toMatchSnapshot();
  });
});
