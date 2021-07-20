import { configure, shallow } from 'enzyme';
import { Button } from './Button';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe('components/Button', () => {
  it('should have primary style render', () => {
    expect(shallow(<Button styleType="primary" />)).toMatchSnapshot();
  });

  it('should have secondary style render', () => {
    expect(shallow(<Button styleType="secondary" />)).toMatchSnapshot();
  });
});
