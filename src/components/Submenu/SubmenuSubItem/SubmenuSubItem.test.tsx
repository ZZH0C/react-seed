import { configure, shallow } from 'enzyme';
import { SubmenuSubItem } from './SubmenuSubItem';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { useQueryParams } from '../../../hooks/useQueryParams/useQueryParams';
import { mocked } from 'ts-jest/utils';

jest.mock('../../../hooks/useQueryParams/useQueryParams');
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
    category: 'MOCK_CATEGORY',
    name: 'name',
    children: 'some text',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and call queryParams', () => {
    const category = 'MOCK_CATEGORY';
    shallow(
      <SubmenuSubItem
        href={mockProps.href}
        name={mockProps.name}
        category={mockProps.category}
      >
        {mockProps.children}
      </SubmenuSubItem>,
    );
    expect(useQueryParams).toHaveBeenCalled();
    expect(changeParams).toHaveBeenCalledWith(category, 'in');
  });
});
