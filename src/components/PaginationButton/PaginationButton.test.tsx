import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { PaginationButton } from './PaginationButton';

describe('components/ButtonLink', () => {
  const mockProps = {
    onClickFunction: () => {
      return null;
    },
    children: 'SOME_TEXT',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render right disabled and match snapshot', () => {
    expect(
      shallow(
        <PaginationButton
          isDisabled={true}
          isRight={true}
          onClickFunction={mockProps.onClickFunction()}
        >
          {mockProps.children}
        </PaginationButton>,
      ),
    ).toMatchSnapshot();
  });
  it('should render left disabled and match snapshot', () => {
    expect(
      shallow(
        <PaginationButton
          isDisabled={true}
          isRight={false}
          onClickFunction={mockProps.onClickFunction()}
        >
          {mockProps.children}
        </PaginationButton>,
      ),
    ).toMatchSnapshot();
  });
  it('should render right active and match snapshot', () => {
    expect(
      shallow(
        <PaginationButton
          isDisabled={false}
          isRight={true}
          onClickFunction={mockProps.onClickFunction()}
        >
          {mockProps.children}
        </PaginationButton>,
      ),
    ).toMatchSnapshot();
  });
  it('should render left active and match snapshot', () => {
    expect(
      shallow(
        <PaginationButton
          isDisabled={false}
          isRight={false}
          onClickFunction={mockProps.onClickFunction()}
        >
          {mockProps.children}
        </PaginationButton>,
      ),
    ).toMatchSnapshot();
  });
});
