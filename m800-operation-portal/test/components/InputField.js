/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import InputField from 'components/InputField';


describe('<InputField />', function () {

  let wrapper;

  beforeEach(function () {
    const props = {
      onChange: () => {},
    };
    wrapper = shallow(<InputField {...props} />);
  });


  it('contain a <input /> tag', function () {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should call the onChange function if the input value is changed', function () {
    const event = {
      target:
      {
        value: 'hk',
      },
    };

    const spy = sinon.spy();

    wrapper = shallow(<InputField onChange={spy} />);

    wrapper.find('input').simulate('change', event);

    expect(spy.withArgs('hk').callCount).to.equal(1, 'call onChange with text value');
  });

});
