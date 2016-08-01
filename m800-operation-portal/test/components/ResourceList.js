import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import ResourceList from 'components/ResourceList';
import Resource from 'components/Resource';

describe('<ResourceList />', function () {

  it('contain a <resource /> tag if resourcess has value', function () {

    const props = { resources: [{ type: 'test' }, { type: 'test' }] };

    const wrapper = shallow(<ResourceList {...props} />);

    expect(wrapper.find(Resource)).to.have.length(props.resources.length);

  });
});
