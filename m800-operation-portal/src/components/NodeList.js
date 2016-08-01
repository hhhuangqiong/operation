import React, { PropTypes } from 'react';
import ServerNode from '../components/ServerNode';

const NodeList = (props) => {
  const { nodes, onItemClick } = props;
  return (
    <div>
      <table className="operation-table hover">
        <tbody>
          <tr>
            <th>uniqueId</th>
            <th>region</th>
          </tr>
          {
            nodes.map((item, index) => (
              <ServerNode onClick={onItemClick} key={index} {...item} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

NodeList.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    uniqueId: PropTypes.string,
    region: PropTypes.string,
  })),
  onItemClick: PropTypes.func.isRequired,
};
NodeList.defaultProps = {
  nodes: [],
};

export default NodeList;
