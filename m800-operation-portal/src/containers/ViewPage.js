import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import NodeList from '../components/NodeList';
import NodeDetail from '../components/NodeDetail';
import InputField from '../components/InputField';
import isEmpty from 'lodash/isEmpty';
import {
  selectNode,
  filterNodesById,
  filterNodesByRegions,
  fetchNodesIfNeeded,
} from '../actions/nodeActions';
import { getSelectedNode, getNodesByIdRegions } from '../selectors';
import { resourcesListShape } from '../components/ResourceList';
import { recentEventListShape } from '../components/RecentEventList';
import { attributeShape } from '../components/Attribute';

export class ViewPage extends Component {
  componentDidMount() {
    this.props.getInitialNodes();
  }
  renderList() {
    const { isFetching, selectedRegions, regions, selectByRegion } = this.props;
    const regionsArray = regions.map(region => ({
      value: region,
      label: region,
    }));

    return (
      <div className="small-3 columns node-list">
        {
          !isFetching ? (
            <div>
              <InputField onChange={this.props.filterNodesById} />
              <Select
                multi
                simpleValue
                value={selectedRegions}
                placeholder="Select region(s)"
                options={regionsArray}
                onChange={selectByRegion}
              />
              <b>This is the node list:</b>
              <NodeList {...this.props} />
            </div>
          ) : (
            <div>Loading...</div>
          )
        }
      </div>
    );
  }
  renderDetail() {
    const { node } = this.props;

    if (isEmpty(node)) {
      return <div>Please select a node</div>;
    }

    return (
      <div className="small-9 columns node-detail">
        <NodeDetail node={node} />
      </div>
    );
  }

  render() {
    const { failReason } = this.props;

    return (
      <div>
        {
          failReason ? (
            <div>{failReason}</div>
          ) : (
            <div className="row view-page" >
              {this.renderList()}
              {this.renderDetail()}
            </div>
          )
        }
      </div>
    );
  }
}

ViewPage.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    uniqueId: PropTypes.string,
    region: PropTypes.string,
  })),
  node: PropTypes.shape({
    uniqueId: PropTypes.string,
    region: PropTypes.string,
    attributes: PropTypes.arrayOf(attributeShape),
    resources: resourcesListShape,
    staticNode: PropTypes.bool,
    partitions: PropTypes.array,
    recentEvents: recentEventListShape,
  }),
  isFetching: PropTypes.bool,
  failReason: PropTypes.string,
  selectedRegions: PropTypes.arrayOf(PropTypes.string),
  regions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectByRegion: PropTypes.func,
  getInitialNodes: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  filterNodesById: PropTypes.func.isRequired,
};
ViewPage.defaultProps = {
  node: {},
};

const mapStateToProps = (state) => (
  {
    isFetching: state.node.isFetching,
    nodes: getNodesByIdRegions(state),
    idFilter: state.node.idFilter,
    failReason: state.node.failReason,
    selectedRegions: state.node.selectedRegions,
    node: getSelectedNode(state),
    regions: state.node.regions,
  }
);
const mapDispatchToProps = (dispatch) => (
  {
    getInitialNodes: () => { dispatch(fetchNodesIfNeeded()); },
    onItemClick: (id) => { dispatch(selectNode(id)); },
    filterNodesById: (val) => {
      dispatch(filterNodesById(val));
    },
    selectByRegion: (val) => {
      let value;
      if (val) {
        value = val.split(',');
      }
      dispatch(filterNodesByRegions(value));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPage);
