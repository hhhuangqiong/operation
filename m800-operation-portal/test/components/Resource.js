import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Resource from 'components/Resource';
import ListenPoint from 'components/ListenPoint';
import Attribute from 'components/Attribute';
import NullableCollection from 'components/NullableCollection';

function mockResource() {
  // body...
  return {
    type: 'com.maaii.resource.single.sign.on',
    uniqueId: 'msso-hk-2',
    listenPoints: [
      {
        type: 'com.maaii.listen.point.internal.remoting',
        host: '192.168.118.23',
        protocol: 'akka.tcp',
        port: 2553,
        attributes: null,
      },
      {
        type: 'com.maaii.listen.point.external.generic',
        host: '192.168.118.23',
        protocol: 'http',
        port: 8081,
        attributes: null,
      },
    ],
    attributes: [{ name: 'test', value: 'test' }],
    loadFactor: 1,
    shardable: true,
    shardNumber: 1,
    restrictions: { test: 'test' },
    labels: null,
    version: null,
    constraints: null,
  };
}

describe('<Resource />', function () {

  const props = mockResource();

  const wrapper = shallow(<Resource {...props} />);

  it('should render the type,uniqueId,loadFactor,shardable,shardNumber'
    , function () {


      expect(wrapper.text()).to.contain(props.type);
      expect(wrapper.text()).to.contain(props.uniqueId);
      expect(wrapper.text()).to.contain(props.loadFactor);
      expect(wrapper.text()).to.contain(props.shardable);
      expect(wrapper.text()).to.contain(props.shardNumber);

    });
  it('should contain <ListenPoint /> tags if listenPoint has value', function () {

    expect(wrapper.find(ListenPoint)).to.have.length(props.listenPoints.length);
  });

  it('should contain <NullableCollection /> tags  ', function () {

    expect(wrapper.find(NullableCollection)).to.have.length(3);

  });

  it('should contain <Attribute> tag if the arrtribute has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(0).prop('renderFunc');
    const subWrapper = shallow(<PassedComponent {...props.attributes[0]} />);
    expect(subWrapper.find(Attribute)).to.have.length(1);
  });

  it('should contain <li> tag if the restrictions has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(1).prop('renderFunc')();
    expect(PassedComponent.type).to.equal('li');
  });

  it('should contain <li> tag if the restrictions has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(2).prop('renderFunc')();
    expect(PassedComponent.type).to.equal('li');
  });

});
