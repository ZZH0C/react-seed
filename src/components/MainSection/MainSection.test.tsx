import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { MainSection } from './MainSection';
import { mocked } from 'ts-jest/utils';
import { useCreateMessagesUi } from '../../hooks/useCreateMessagesUi/useCreateMessagesUi';

jest.mock('../../hooks/useCreateMessagesUi/useCreateMessagesUi');
const mockElement: JSX.Element = (
  <div>
    <p>MOCK_ELEMENT</p>
  </div>
);
mocked(useCreateMessagesUi).mockImplementation(() => mockElement);

describe('components/ButtonLink', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render and match snapshot', () => {
    expect(shallow(<MainSection />)).toMatchSnapshot();
  });
});
