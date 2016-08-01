import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import ListenPoint from 'components/ListenPoint';
import Attribute from 'components/Attribute';
import NullableCollection from 'components/NullableCollection';

function mockListenPoint() {
  return {
    type: 'com.maaii.listen.point.internal.remoting',
    host: '192.168.118.19',
    protocol: 'akka.tcp',
    port: 2554,
    attributes: [{ name: 'hh', value: 'teach' }, { name: 'hh', value: 'teach' }],
  };
}

describe('<ListenPoint />', function () {

  const props = mockListenPoint();

  const wrapper = shallow(<ListenPoint {...props} />);

  it('should render the type', function () {

    expect(wrapper.text()).to.contain(props.type);

  });


  it('should render the host', function () {

    expect(wrapper.text()).to.contain(props.host);

  });


  it('should render the protocol', function () {

    expect(wrapper.text()).to.contain(props.protocol);

  });

  it('should render the port', function () {

    expect(wrapper.text()).to.contain(props.port);

  });

  it('should contain <NullableCollection /> tag if the props.attributes have value ', function () {

    expect(wrapper.find(NullableCollection)).to.have.length(1);

  });

  it('should contain <Attribute> tag if the arrtribute has value', function () {
    const PassedComponent = wrapper.find(NullableCollection).at(0).prop('renderFunc');
    const subWrapper = shallow(<PassedComponent {...props.attributes[0]} />);
    expect(subWrapper.find(Attribute)).to.have.length(1);
  });

});
