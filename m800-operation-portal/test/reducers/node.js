import { expect } from 'chai';

import {
  SELECT_NODE,
  FILTER_NODES_BY_ID,
  FILTER_NODES_BY_REGIONS,
} from 'constants/actionTypes';

import nodeReducer from 'reducers/node';

describe('node reducer', function () {

  describe('handle SELECT_NODE', function () {

    it('should change state.node.selectedNodeId', function () {

      const currentState = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: '1',
      };

      const action = {
        type: SELECT_NODE,
        id: '2',
      };

      const expected = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: '2',
      };

      expect(nodeReducer(currentState, action))
        .to.deep.equal(expected, 'selected node with id = "2"');

    });

  });

  describe('handle FILTER_NODES_BY_ID', function () {

    it('should change state.node.idFilter ', function () {

      const currentState = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: '1',
        idFilter: '1',
      };

      const action = {
        type: FILTER_NODES_BY_ID,
        text: '2',
      };

      const expected = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: null,
        idFilter: '2',
      };

      expect(nodeReducer(currentState, action))
        .to.deep.equal(expected, 'idFilter will be "2"');

    });

    it('should make state.node.selectedNodeId to be null', function () {
      const currentState = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: '1',
        idFilter: '1',
      };

      const action = {
        type: FILTER_NODES_BY_ID,
        text: '2',
      };

      const expected = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: null,
        idFilter: '2',
      };

      expect(nodeReducer(currentState, action))
        .to.deep.equal(expected, 'selectedNodeId will be null');

    });

  });

  describe('handle FILTER_NODES_BY_REGIONS', function () {

    let currentState;

    const action = {
      type: FILTER_NODES_BY_REGIONS,
      regions: ['hongkong-all', 'china-all'],
    };

    beforeEach(function () {
      currentState = {
        availableNodes: [{
          id: '1',
        }, {
          id: '2',
        }],
        selectedNodeId: '1',
        selectedRegions: 'hongkong-all',
      };
    });

    it('should change state.node.selectedRegions', function () {

      expect(nodeReducer(currentState, action).selectedRegions)
       .to.deep
       .equal(['hongkong-all', 'china-all'], 'selectedRegions will be hongkong-all, china-all');

    });

    it('should make state.node.selectedNodeId to be null', function () {

      expect(nodeReducer(currentState, action).selectedNodeId)
        .to.deep.equal(null, 'selectedNodeId will be null');

    });

  });

});
