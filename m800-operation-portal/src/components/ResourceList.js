import React, { PropTypes } from 'react';
import Resource, { resourceShape } from '../components/Resource';

const ResourceList = (props) => (
  <table className="operation-table">
    <tbody>
      <tr>
        <th>type</th>
        <th>unique Id</th>
        <th className="listen-points">listen Points</th>
        <th>attributes</th>
        <th>load Factor</th>
        <th>shardable</th>
        <th>shard Number</th>
        <th>restrictions</th>
        <th>labels</th>
        <th>version</th>
        <th>constraints</th>
      </tr>
      {
        props.resources.map((item, index) => (
          <Resource key={index} {...item} />
        ))
      }
    </tbody>
  </table>
  );

export const resourcesListShape = PropTypes.arrayOf(resourceShape);
ResourceList.propTypes = {
  resources: resourcesListShape,
};
ResourceList.defaultProps = {
  resources: [],
};

export default ResourceList;
