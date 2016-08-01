import React, { PropTypes } from 'react';
import DetailList from '../components/DetailList';
import { resourcesListShape } from '../components/ResourceList';
import { recentEventListShape } from '../components/RecentEventList';
import { attributeShape } from '../components/Attribute';

const NodeDetail = (props) => {
  const node = props.node;
  return (
    <DetailList {...node} />
  );
};

NodeDetail.propTypes = {
  node: PropTypes.shape({
    uniqueId: PropTypes.string,
    region: PropTypes.string,
    attributes: PropTypes.arrayOf(attributeShape),
    resources: resourcesListShape,
    staticNode: PropTypes.bool,
    partitions: PropTypes.array,
    recentEvents: recentEventListShape,
  }),
};
NodeDetail.defaultProps = {
  node: {},
};

export default NodeDetail;

