import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import NotFoundPage from 'components/NotFoundPage';


describe('<NotFoundPage />', function () {

  const wrapper = shallow(<NotFoundPage />);

  it('contain a <Link /> tag', function () {

    expect(wrapper.find('Link')).to.have.length(1);

  });

  it('should contain a Link which props.to equal "/"', function () {

    expect(wrapper.find('Link').prop('to')).to.equal('/');

  });

});
