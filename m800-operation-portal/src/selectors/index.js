import { createSelector } from 'reselect';
import { intersectionBy } from 'lodash';

const getNodes = (state) => state.node.availableNodes;
const getIdFilter = (state) => state.node.idFilter;
const getSelectedRegions = (state) => state.node.selectedRegions;
const getSelectedNodeId = (state) => state.node.selectedNodeId;

export const getSelectedNode = createSelector(
  [getNodes, getSelectedNodeId],
  (nodes, selectedId) => (
    nodes.find(n => n.uniqueId === selectedId)
  )
);

export const getNodeByIdFilter = createSelector(
  [getNodes, getIdFilter],
  (nodes, idFilter) => {
    if (!idFilter) {
      return nodes;
    }
    return nodes.filter(node => (
      node.uniqueId.indexOf(idFilter) !== -1
    ));
  }
);

export const getNodesByRegions = createSelector(
  [getNodes, getSelectedRegions],
  (nodes, selectedRegions) => {
    if (!selectedRegions) {
      return nodes;
    }

    let result = [];
    let filterSingle = [];
    selectedRegions.forEach(region => {
      filterSingle = nodes.filter(node => (
        node.region.indexOf(region) !== -1
        )
      );
      result = result.concat(filterSingle);
    });
    return result;
  }
);

export const getNodesByIdRegions = createSelector(
  [getNodeByIdFilter, getNodesByRegions],
  (nodesId, nodesRegions) => (
    intersectionBy(nodesId, nodesRegions, 'uniqueId')
  )
);
