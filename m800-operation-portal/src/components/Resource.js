import React, { PropTypes } from 'react';
import ListenPoint, { listenPointShape } from '../components/ListenPoint';
import Attribute from '../components/Attribute';
import NullableCollection from '../components/NullableCollection';

// labels version constraints are for temporary use. cos all nodes are null in these three area
const Resource = (props) => (
  <tr>
    <td>{props.type}</td>
    <td>{props.uniqueId}</td>
    <td>
    {
      props.listenPoints.map((item, index) => <ListenPoint key={index} {...item} />)
    }
    </td>
    <td>
      <NullableCollection
        collection={props.attributes}
        renderFunc={(item, index) => (<Attribute key={index} {...item} />)}
      />
    </td>
    <td>{props.loadFactor}</td>
    <td>{props.shardable.toString()}</td>
    <td>{props.shardNumber}</td>
    <td>
      <NullableCollection
        collection={props.restrictions}
        renderFunc={(item, index) => (<li key={index}>{index}:{item}</li>)}
      />
    </td>
    <td>
    {
      <span>{props.labels ? props.labels : 'null'}</span>
    }
    </td>
    <td>
      <NullableCollection
        collection={props.version}
        renderFunc={(item, index) => (<li key={index}>{index}:{item}</li>)}
      />
    </td>
    <td>
    {
      <span>{props.constraints ? props.constraints : 'null'}</span>
    }
    </td>
  </tr>
);

Resource.propTypes = {
  type: PropTypes.string,
  uniqueId: PropTypes.string,
  listenPoints: PropTypes.arrayOf(listenPointShape),
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
  loadFactor: PropTypes.number,
  shardable: PropTypes.bool,
  shardNumber: PropTypes.number,
  restrictions: PropTypes.object,
  labels: PropTypes.array,
  version: PropTypes.shape({
    major: PropTypes.number,
    minor: PropTypes.number,
    build: PropTypes.number,
    variant: PropTypes.string,
  }),
  constraints: PropTypes.shape({
    carrier: PropTypes.shape({
      permisstion: PropTypes.string,
      patterns: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
Resource.defaultProps = {
  listenPoints: [],
  attributes: [],
  restrictions: {},
  labels: [],
  version: '',
  constraints: {},
};

export const resourceShape = PropTypes.shape(Resource.propTypes);

export default Resource;

