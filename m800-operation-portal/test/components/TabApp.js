import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import TabApp from 'components/TabApp';
import RecentEventList from 'components/RecentEventList';
import ResourceList from 'components/ResourceList';

describe('<TabApp />', function () {

  const props = {
    recentEvents: [],
    resources: [],
  };

  it('should contain a <Tabs /> tag', function () {

    const wrapper = shallow(<TabApp {...props} />);

    expect(wrapper.find('Tabs')).to.have.length(1);

  });

  it('should contain a <TabList /> tag', function () {

    const wrapper = shallow(<TabApp {...props} />);

    expect(wrapper.find('TabList')).to.have.length(1);

  });

  it('should contain a <TabPanel /> tag', function () {

    const wrapper = shallow(<TabApp {...props} />);

    expect(wrapper.find('TabPanel')).to.have.length(2);

  });

  it('should contain a <RecentEventList /> tag', function () {

    const recentEventsProps = Object.assign({}, props, { recentEvents: [{ type: 'test' }] });

    const wrapper = shallow(<TabApp {...recentEventsProps} />);

    expect(wrapper.find(RecentEventList)).to.have.length(1);


  });

  it('<RecentEventList /> tag should have the prop equal to props.recentEvents', function () {

    const recentEventsProps = Object.assign({}, props, { recentEvents: [{ type: 'test' }] });

    const wrapper = shallow(<TabApp {...recentEventsProps} />);

    expect(wrapper.find(RecentEventList).prop('recentEvents'))
      .to.equal(recentEventsProps.recentEvents);

  });

  it('should contain a <ResourceList /> tag', function () {

    const resourceProps = Object.assign({}, props, { resources: [{ type: 'test' }] });

    const wrapper = shallow(<TabApp {...resourceProps} />);

    expect(wrapper.find(ResourceList)).to.have.length(1);


  });

  it('<ResourceList /> tag should have the prop equal to props.resources', function () {

    const resourceProps = Object.assign({}, props, { resources: [{ type: 'test' }] });

    const wrapper = shallow(<TabApp {...resourceProps} />);

    expect(wrapper.find(ResourceList).prop('resources')).to.equal(resourceProps.resources);

  });

});
