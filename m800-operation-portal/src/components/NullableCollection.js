import React, { PropTypes } from 'react';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const NullableCollection = ({ collection, renderFunc }) => (
  <div>
    {
      isEmpty(collection) ? (
        <span>null</span>
      ) : (
        map(collection, renderFunc)
      )
    }
  </div>
);

NullableCollection.propTypes = {
  collection: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  renderFunc: PropTypes.func.isRequired,
};

export default NullableCollection;
