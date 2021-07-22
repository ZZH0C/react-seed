import { configure, shallow } from 'enzyme';
import { HomePage } from './HomePage';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('components/HomePage', () => {
  it('should render', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });

  // it('should call changeParams', () => {});
});
