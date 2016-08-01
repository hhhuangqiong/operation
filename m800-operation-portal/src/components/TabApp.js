import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RecentEventList, { recentEventListShape } from '../components/RecentEventList';
import ResourceList, { resourcesListShape } from '../components/ResourceList';

const TabApp = (props) => (
  <Tabs selectedIndex={0}>
    <TabList className="tabs">
      <Tab className="tabs-title">RecentEvents</Tab>
      <Tab>Resources</Tab>
    </TabList>
    <TabPanel>
    {
      !props.recentEvents.length ? (
        <p>recentEvents is an empty array</p>
      ) : (
        <RecentEventList recentEvents={props.recentEvents} />
      )
    }
    </TabPanel>
    <TabPanel>
    {
      !props.resources.length ? (
        <p>resources is null</p>
      ) : (
        <ResourceList resources={props.resources} />
      )
    }
    </TabPanel>
  </Tabs>
);

TabApp.propTypes = {
  recentEvents: recentEventListShape,
  resources: resourcesListShape,
};
TabApp.defaultProps = {
  recentEvents: [],
  resources: [],
};

export default TabApp;

