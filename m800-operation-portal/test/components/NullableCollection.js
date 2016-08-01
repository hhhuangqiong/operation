import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import NullableCollection from 'components/NullableCollection';

describe('<NullableCollection />', function () {

  const props = {
    collection: [1, 2, 3],
    renderFunc: (item, index) => (<li key={index}>{item}</li>),
  };

  let wrapper = shallow(<NullableCollection {...props} />);


  it('should contain null if the condition is true', function () {

    expect(wrapper.find('li')).to.have.length(props.collection.length);

  });

  it('should contain renderTag if the condition is false', function () {

    const tagProps = Object.assign({}, props, { collection: undefined });

    wrapper = shallow(<NullableCollection {...tagProps} />);

    expect(wrapper.text()).to.contain('null');

  });

});
