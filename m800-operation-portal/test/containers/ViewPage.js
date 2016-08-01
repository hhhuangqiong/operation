/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Select from 'react-select';
import { ViewPage } from 'containers/ViewPage';
import InputField from 'components/InputField';
import NodeList from 'components/NodeList';
import NodeDetail from 'components/NodeDetail';


describe('<ViewPage />', function () {

  const props = {
    node: {
      uniqueId: 'msso-hk-1',
      staticNode: false,
      resources: [],
      recentEvents: [],
    },
    regions: ['hk'],
    getInitialNodes: () => {},
    onItemClick: () => {},
    filterNodesById: () => {},
    selectByRegion: () => {},
    refreshNodes: () => {},
  };

  const wrapper = shallow(<ViewPage {...props} />);

  it('should contain <InputField /> tag', function () {

    expect(wrapper.find(InputField)).to.have.length(1);

  });

  it('should contain <Select /> tag', function () {

    expect(wrapper.find(Select)).to.have.length(1);

  });

  it('should contain <NodeList /> tag', function () {

    expect(wrapper.find(NodeList)).to.have.length(1);

  });

  it('should contain <NodeDetail /> tag', function () {

    expect(wrapper.find(NodeDetail)).to.have.length(1);

  });

});
