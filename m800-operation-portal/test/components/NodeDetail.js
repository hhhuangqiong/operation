import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import NodeDetail from 'components/NodeDetail';
import DetailList from 'components/DetailList';

describe('<NodeDetail />', function () {

  it('should contain <DetailList /> tag if node has value', function () {

    const wrapper = shallow(<NodeDetail />);

    expect(wrapper.find(DetailList)).to.have.length(1);

  });

});
