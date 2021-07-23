import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { MainContainer } from './MainContainer';

describe('components/ButtonLink', () => {
  const mockProps = {
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(<MainContainer>{mockProps.children}</MainContainer>),
    ).toMatchSnapshot();
  });
  it('should render without children and match snapshot ', () => {
    expect(shallow(<MainContainer />)).toMatchSnapshot();
  });
});
