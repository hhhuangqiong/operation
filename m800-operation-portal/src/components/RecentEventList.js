import React, { PropTypes } from 'react';
import RecentEvent, { recentEventShape } from '../components/RecentEvent';

const RecentEventList = (props) => (
  <table className="operation-table">
    <tbody>
      <tr>
        <th>type</th>
        <th>time stamp</th>
        <th>application Config</th>
        <th>libraries</th>
        <th>region</th>
        <th>unique Id</th>
        <th>source Ip</th>
        <th>resources</th>
        <th>java Version</th>
        <th>os Version</th>
      </tr>
      {
        props.recentEvents.map((item, index) => (
          <RecentEvent key={index} {...item} />
        ))
      }
    </tbody>
  </table>
);

export const recentEventListShape = PropTypes.arrayOf(recentEventShape);

RecentEventList.propTypes = {
  recentEvents: recentEventListShape,
};
RecentEventList.defaultProps = {
  recentEvents: [],
};

export default RecentEventList;
