import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderUserIcons } from './HeaderUserIcons';

describe('components/Head', () => {
  const mockProps = {
    mockURL: 'mockURL',
  };
  const firstClass = 'icon-mail';
  const secondClass = 'icon-bell';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot with first classname', () => {
    expect(
      shallow(
        <HeaderUserIcons url={mockProps.mockURL} classname={firstClass} />,
      ),
    ).toMatchSnapshot();
  });
  it('should render and match snapshot with second classname', () => {
    expect(
      shallow(
        <HeaderUserIcons url={mockProps.mockURL} classname={secondClass} />,
      ),
    ).toMatchSnapshot();
  });
});
