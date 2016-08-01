import React, { PropTypes } from 'react';
import Attribute from '../components/Attribute';
import NullableCollection from '../components/NullableCollection';

const ListenPoint = (props) => {
  const { type, host, protocol, port, attributes } = props;

  return (
    <ul>
      <li>type:{type}</li>
      <li>host:{host}</li>
      <li>protocol:{protocol}</li>
      <li>port:{port}</li>
      <li>
        attributes:
        {
          <NullableCollection
            collection={attributes}
            renderFunc={(item, index) => (<Attribute key={index} {...item} />)}
          />
        }
      </li>
    </ul>
  );
};

ListenPoint.propTypes = {
  type: PropTypes.string,
  host: PropTypes.string,
  protocol: PropTypes.string,
  port: PropTypes.number,
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
};
ListenPoint.defaultProps = {
  attributes: [],
};

export const listenPointShape = PropTypes.shape(ListenPoint.propTypes);

export default ListenPoint;
