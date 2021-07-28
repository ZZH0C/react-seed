import { configure, shallow } from 'enzyme';
import { HomePage } from './HomePage';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({ adapter: new Adapter() });

jest.mock('../../hooks/useUserContext/useUserContext');

jest.mock('../../components/config', () => {
  const fakeItems = {
    href: '/',
    name: 'FAKE_NAME',
    category: 'FAKE_CATEGORY',
  };
  const fakeLabel = {
    href: '/',
    name: 'FAKE_NAME',
    label: 'FAKE_LABEL',
  };
  const fakeSrc = '/';
  const fakeCategoryContainer = { name: 'FAKE_CATEGORY_NAME' };
  const fakeLogoProps = {
    desktopImgSrc: 'FAKE_SRC',
    mobileImgSrc: 'FAKE_SRC',
    desktopImgAlt: 'FAKE_SRC',
    mobileImgAlc: 'FAKE_SRC',
  };

  return {
    SubItemCategories: [fakeItems, fakeItems],
    navBarLabels: [fakeLabel, fakeLabel],
    emptyProfilePictureSrc: fakeSrc,
    categoryContainer: fakeCategoryContainer,
    logoProps: fakeLogoProps,
  };
});

describe('components/HomePage', () => {
  it('should render', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
