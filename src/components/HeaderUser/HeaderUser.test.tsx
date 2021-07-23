import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderUser } from './HeaderUser';

describe('components/ButtonLink', () => {
  const mockProps = {
    href: '/',
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(
        <HeaderUser src={mockProps.href}>{mockProps.children}</HeaderUser>,
      ),
    ).toMatchSnapshot();
  });
  //TODO: add useContext test
});
