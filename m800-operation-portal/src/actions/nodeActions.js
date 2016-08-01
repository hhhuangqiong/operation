import fetch from 'isomorphic-fetch';
import {
  SELECT_NODE,
  FILTER_NODES_BY_ID,
  FILTER_NODES_BY_REGIONS,
  REQUEST_NODES,
  RECEIVED_NODES_SUCCESS,
  RECEIVED_NODES_FAILURE,
} from '../constants/actionTypes';
import { SERVERS_SNAPSHOT_API } from '../config';

export function selectNode(id) {
  return { type: SELECT_NODE, id };
}

export function filterNodesById(text) {
  return {
    type: FILTER_NODES_BY_ID,
    text,
  };
}

export function filterNodesByRegions(regions) {
  return {
    type: FILTER_NODES_BY_REGIONS,
    regions,
  };
}

function requestNodes() {
  return {
    type: REQUEST_NODES,
  };
}

function receivedNodesSuccess(nodes) {
  return {
    type: RECEIVED_NODES_SUCCESS,
    nodes,
    receivedAt: Date.now(),
  };
}

function receivedNodesFailure(reason) {
  return {
    type: RECEIVED_NODES_FAILURE,
    reason,
  };
}

function fetchNodes() {
  return dispatch => {
    dispatch(requestNodes());
    return fetch(SERVERS_SNAPSHOT_API).then(response => {
      if (response.status >= 400) {
        return dispatch(receivedNodesFailure(response.statusText));
      }
      return response.json();
    })
    .then(nodes => dispatch(receivedNodesSuccess(nodes)));
  };
}

function shouldFetchNodes(state) {
  const node = state.node.availableNodes;
  if (!node.length) {
    return true;
  }
  if (state.node.isFetching) {
    return false;
  }
  return true;
}

export function fetchNodesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchNodes(getState())) {
      dispatch(fetchNodes());
    }
  };
}
