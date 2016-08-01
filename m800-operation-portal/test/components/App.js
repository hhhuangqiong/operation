import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from 'components/App';
import NavBar from 'containers/NavBar';
import M800ThemeProvider from 'm800-web-styleguide/react/dist/components/common/M800ThemeProvider';


describe('<App />', function () {

  it('contains a <M800ThemeProvider /> component', function () {

    const wrapper = shallow(<App />);

    expect(wrapper.find(M800ThemeProvider)).to.have.length(1);

  });

  it('contains a <NavBar /> component', function () {

    const wrapper = shallow(<App />);

    expect(wrapper.find(NavBar)).to.have.length(1);

  });

});

