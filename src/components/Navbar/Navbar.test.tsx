import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Navbar } from './Navbar';

describe('components/ButtonLink', () => {
  const mockProps = {
    children: 'SOME_TEXT',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(shallow(<Navbar>{mockProps.children}</Navbar>)).toMatchSnapshot();
  });
});
