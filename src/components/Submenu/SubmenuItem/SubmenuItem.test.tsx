import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { SubmenuItem } from './SubmenuItem';

describe('components/ButtonLink', () => {
  const mockProps = {
    name: 'SOME_NAME',
    children: 'SOME_TEXT',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(
      shallow(
        <SubmenuItem name={mockProps.name}>{mockProps.children}</SubmenuItem>,
      ),
    ).toMatchSnapshot();
  });
});
