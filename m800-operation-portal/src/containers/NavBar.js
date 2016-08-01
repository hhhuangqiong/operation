import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchNodesIfNeeded } from '../actions/nodeActions';

const NavBar = (props) => (
  <nav className="top-bar" data-topbar role="navigation">
    <div className="top-bar-left">
      <ul className="menu">
        <li>
          <a href="#">M800 Operation Portal</a>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <button
        onClick={props.refreshNodes}
        value="Update"
        className="button text-primary"
      >
        Update
      </button>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => (
  {
    refreshNodes: () => {
      dispatch(fetchNodesIfNeeded());
    },
  }
);

NavBar.propTypes = {
  refreshNodes: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(NavBar);
