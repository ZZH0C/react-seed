import { configure, shallow } from 'enzyme';
import { HomePage } from './HomePage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

jest.mock('../../components/config');
describe('components/HomePage', () => {
  it('should render', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
  //TODO: add useContext mock
  // it('should call changeParams', () => {});
});
