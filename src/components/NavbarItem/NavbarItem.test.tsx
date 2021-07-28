import { configure, shallow } from 'enzyme';
import { NavbarItem } from './NavbarItem';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';
import { mocked } from 'ts-jest/utils';

jest.mock('../../hooks/useQueryParams/useQueryParams');
const changeParams = jest.fn(() => ({
  parsedParams: 'someText',
  isActive: true,
}));
const getGoogleQueryParams = jest.fn(() => 'someText');
mocked(useQueryParams).mockImplementation(() => ({
  getGoogleQueryParams,
  changeParams,
}));

describe('components/NavbarItem', () => {
  const mockProps = {
    href: '/',
    label: 'Label',
    name: 'name',
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and call queryParams', () => {
    const label = 'MOCK_LABEL';
    shallow(
      <NavbarItem href={mockProps.href} label={label} name={mockProps.name}>
        {mockProps.children}
      </NavbarItem>,
    );
    expect(useQueryParams).toHaveBeenCalled();
    expect(changeParams).toHaveBeenCalledWith(label, 'category');
  });
});
