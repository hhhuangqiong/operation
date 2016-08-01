import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Attribute from 'components/Attribute';

describe('<Attribute />', function () {

  const props = {
    name: 'test',
    value: 'test test',
  };

  const wrapper = shallow(<Attribute {...props} />);

  it('should contain {props.name} and {props.value}', function () {

    expect(wrapper.text()).to.contain(props.name);
    expect(wrapper.text()).to.contain(props.value);

  });

});
