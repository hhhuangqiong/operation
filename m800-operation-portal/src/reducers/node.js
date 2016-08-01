import {
  SELECT_NODE,
  FILTER_NODES_BY_ID,
  FILTER_NODES_BY_REGIONS,
  REQUEST_NODES,
  RECEIVED_NODES_SUCCESS,
  RECEIVED_NODES_FAILURE,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  availableNodes: [],
  isFetching: false,
  lastUpdated: null,
  selectedNodeId: null,
  idFilter: null,
  selectedRegions: null,
  failReason: null,
  regions: [],
};

const parseNode = (nodeMeta) => {
  const node = Object.assign({}, nodeMeta.node);
  // transfer the data into suitable value
  node.attributes = node.attributes || [];
  node.partitions = node.partitions || [];
  node.resources.forEach(resource => {
    // For reassignment
    /* eslint-disable no-param-reassign */
    resource.listenPoints = resource.listenPoints || [];
    resource.listenPoints.forEach(listenPoint => {
      listenPoint.attributes = listenPoint.attributes || [];
    });
    resource.attributes = resource.attributes || [];
    resource.restrictions = resource.restrictions || {};
    /* eslint-enable */
  });
  node.recentEvents = nodeMeta.recentEvents || [];
  return node;
};

const findRegions = (availableNodes) => {
  const regions = [];
  availableNodes.forEach(nodeMeta => {
    const exist = regions.find(region => (
      region === nodeMeta.node.region
    ));
    if (!exist) {
      regions.push(nodeMeta.node.region);
    }
  });
  return regions;
};

export default function nodeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_NODE:
      return Object.assign({}, state, { selectedNodeId: action.id });
    case FILTER_NODES_BY_ID:
      return Object.assign({}, state, { idFilter: action.text, selectedNodeId: null });
    case FILTER_NODES_BY_REGIONS:
      return Object.assign({}, state, { selectedRegions: action.regions, selectedNodeId: null });
    case REQUEST_NODES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVED_NODES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        availableNodes: action.nodes.availableNodes.map(nodeMeta => (
          parseNode(nodeMeta)
        )),
        lastUpdated: action.receivedAt,
        regions: findRegions(action.nodes.availableNodes),
      });
    case RECEIVED_NODES_FAILURE:
      return Object.assign({}, state, { isFetching: false, failReason: action.reason });
    default:
      return state;
  }
}
