import React, { PropTypes } from 'react';
import Attribute, { attributeShape } from '../components/Attribute';
import TabApp from '../components/TabApp';
import { recentEventListShape } from '../components/RecentEventList';
import { resourcesListShape } from '../components/ResourceList';
import NullableCollection from '../components/NullableCollection';

const DetailList = (props) => {
  const { attributes, staticNode, partitions } = props;
  return (
    <div>
      <div className="operation-panel panel-static-node">
        <strong>StaticNode:</strong> {staticNode.toString()}
      </div>
      <div className="operation-panel panel-attributes-partitions">
        <div className="panel-attributes">
          <strong>Attributes:</strong>
          <div className="attributes row">
            <div className="small-5 columns">
              <strong>key</strong>
            </div>
            <div className="small-5 columns">
              <strong>value</strong>
            </div>
          </div>
          <NullableCollection
            collection={attributes}
            renderFunc={(item, index) => (<Attribute key={index} {...item} />)}
          />
        </div>
        <div className="panel-partitions">
          <strong>Partitions:</strong>
          <NullableCollection
            collection={partitions}
            renderFunc={(item, index) => (<li key={index}>{item}</li>)}
          />
        </div>
      </div>
      <div className="operation-panel panel-tab">
        <TabApp {...props} />
      </div>
    </div>
  );
};

DetailList.propTypes = {
  attributes: PropTypes.arrayOf(attributeShape),
  staticNode: PropTypes.bool,
  partitions: PropTypes.arrayOf(PropTypes.string),
  recentEvents: recentEventListShape,
  resources: resourcesListShape,
};
DetailList.defaultProps = {
  attributes: [],
  partitions: [],
};

export default DetailList;
