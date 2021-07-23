import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { ButtonLink } from './ButtonLink';

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
        <ButtonLink href={mockProps.href}>{mockProps.children}</ButtonLink>,
      ),
    ).toMatchSnapshot();
  });
});
