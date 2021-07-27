import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { HeaderLogo } from './HeaderLogo';

describe('components/Head', () => {
  const mockProps = {
    desktopImgAlt: 'Image Alt',
    desktopImgSrc: '/fake-image-url',
    mobileImgAlc: 'Image Alt',
    mobileImgSrc: '/fake-image-url',
    children: 'mock children',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(<HeaderLogo {...mockProps}>{mockProps.children}</HeaderLogo>),
    ).toMatchSnapshot();
  });
});
