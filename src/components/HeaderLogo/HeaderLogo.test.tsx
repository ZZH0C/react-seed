import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderLogo } from './HeaderLogo';

describe('components/Head', () => {
  const mockProps = {
    children: 'some text',
    mockAlt: 'mockAlt',
    mockSrc: 'mockSrc',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(
        <HeaderLogo
          desktopImgAlt={mockProps.mockAlt}
          desktopImgSrc={mockProps.mockSrc}
          mobileImgSrc={mockProps.mockSrc}
          mobileImgAlc={mockProps.mockAlt}
        >
          {mockProps.children}
        </HeaderLogo>,
      ),
    ).toMatchSnapshot();
  });
});
