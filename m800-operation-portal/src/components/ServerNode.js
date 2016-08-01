import React, { PropTypes, Component } from 'react';

class ServerNode extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.uniqueId);
  }
  render() {
    return (
      <tr onClick={this.onClick}><td>{this.props.uniqueId}</td><td>{this.props.region}</td></tr>
    );
  }
}

ServerNode.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ServerNode;

