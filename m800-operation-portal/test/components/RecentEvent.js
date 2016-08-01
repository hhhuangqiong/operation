import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import RecentEvent from 'components/RecentEvent';

function mockRecentEvent() {
  // body...
  return {
    type: 'StartupEvent',
    timestamp: 1447224103300,
    region: 'hongkong-all',
    uniqueId: 'msso-hk-2',
    sourceIp: '192.168.118.23',
    resources: {
      'com.maaii.resource.single.sign.on': '2.0.17',
    },
    javaVersion: '1.8.0_25',
    osVersion: 'amd64-Linux-3.10.0-229.el7.x86_64',

  };
}

describe('<RecentEvent />', function () {

  const props = mockRecentEvent();

  const wrapper = shallow(<RecentEvent {...props} />);

  it('should render the type,timestamp,region,uniqueId,sourceIp,resources,javaVersion,osVersion',
    function () {

      expect(wrapper.text()).to.contain(props.type);
      expect(wrapper.text()).to.contain(props.timestamp);
      expect(wrapper.text()).to.contain(props.region);
      expect(wrapper.text()).to.contain(props.uniqueId);
      expect(wrapper.text()).to.contain(props.sourceIp);
      expect(wrapper.text()).to.contain(props.resources['com.maaii.resource.single.sign.on']);
      expect(wrapper.text()).to.contain(props.javaVersion);
      expect(wrapper.text()).to.contain(props.osVersion);

    });

});
