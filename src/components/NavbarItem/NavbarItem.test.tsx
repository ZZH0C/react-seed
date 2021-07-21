import { configure, shallow } from 'enzyme';
import { NavbarItem } from './NavbarItem';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { useQueryParams } from '../../hooks/useQueryParams/useQueryParams';
import { mocked } from 'ts-jest/utils';

jest.mock('../../hooks/useQueryParams/useQueryParams');
const mockedQueryParams = mocked(useQueryParams).mockImplementation(() => {
  const changeParams = () => {
    return {
      parsedParams: 'someText',
      isActive: true,
    };
  };
  const getGoogleQueryParams = () => {
    return 'someText';
  };
  return { getGoogleQueryParams, changeParams };
});

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

  it('should render', () => {
    expect(
      shallow(
        <NavbarItem
          href={mockProps.href}
          label={mockProps.label}
          name={mockProps.name}
        >
          {mockProps.children}
        </NavbarItem>,
      ),
    ).toMatchSnapshot();
  });

  it('should call changeParams', () => {
    shallow(
      <NavbarItem
        href={mockProps.href}
        label={mockProps.label}
        name={mockProps.name}
      >
        {mockProps.children}
      </NavbarItem>,
    );
    expect(mockedQueryParams).toHaveBeenCalledTimes(1);
  });
});
