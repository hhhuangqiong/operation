import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import DetailList from 'components/DetailList';
import NullableCollection from 'components/NullableCollection';
import TabApp from 'components/TabApp';
import Attribute from 'components/Attribute';

describe('<DetailList />', function () {

  const props = {
    attributes: [{ test: 'test' }, { test: 'test' }],
    staticNode: true,
    partitions: ['test', 'test'],
    recentEvents: [{ type: 'StartupEvent', timestamp: 1447224103300 }],
    resources: [
      {
        type: 'com.maaii.resource.cassandra',
        uniqueId: 'cassandra-hk-1',
        listenPoints: [
          {
            type: 'com.maaii.listen.point.internal.remoting',
            host: '192.168.118.17',
            protocol: 'cassandra',
            port: 9160,
            attributes: null,
          },
        ],
        attributes: [
        ],
        loadFactor: 1,
        shardable: false,
        shardNumber: 0,
        restrictions: null,
        labels: null,
        version: null,
        constraints: null,
      },
    ],
  };

  const wrapper = shallow(<DetailList {...props} />);

  it('should have the <NullableCollection /> tag if props.attributes has value', function () {

    expect(wrapper.find(NullableCollection)).to.have.length(2);

  });

  it('should contain the a <TabApp /> tag', function () {

    expect(wrapper.find(TabApp)).to.have.length(1);

  });

  it('should contain <Attribute> tag if the arrtribute has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(0).prop('renderFunc');
    const subWrapper = shallow(<PassedComponent {...props.attributes[0]} />);
    expect(subWrapper.find(Attribute)).to.have.length(1);
  });

  it('should contain <li> tag if the Partitions has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(1).prop('renderFunc')();
    expect(PassedComponent.type).to.equal('li');
  });

});
