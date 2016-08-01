import React, { PropTypes } from 'react';

const Attribute = (props) => (
  <div className="attributes row">
    <div className="small-5 columns">
      {props.name}:
    </div>
    <div className="small-5 columns">
      {props.value}
    </div>
  </div>
);

export const attributeShape = PropTypes.shape(Attribute.propTypes);
Attribute.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Attribute;
