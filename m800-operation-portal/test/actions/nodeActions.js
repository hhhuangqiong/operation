import { expect } from 'chai';

import {
  selectNode, filterNodesById, filterNodesByRegions,
} from 'actions/nodeActions';

import {
  SELECT_NODE, FILTER_NODES_BY_ID, FILTER_NODES_BY_REGIONS,
} from 'constants/actionTypes';


describe('node actions', function () {

  describe('selectNode(id)', function () {

    it('should create an action to select a node by Id', function () {
      const expected = {
        type: SELECT_NODE,
        id: '3',
      };

      expect(selectNode('3')).to.deep.equal(expected, 'selected node with id = "3"');
    });

  });

  describe('filterNodesById(text)', function () {

    it('should create an action to filter nodes by Id', function () {
      const expected = {
        type: FILTER_NODES_BY_ID,
        text: 'hk2',
      };

      expect(filterNodesById('hk2')).to.deep.equal(expected, 'filter id will be hk2');
    });
  });

  describe('filterNodebyRegion(regions)', function () {

    it('should create an action to filter nodes by regions', function () {

      const expected = {
        type: FILTER_NODES_BY_REGIONS,
        regions: 'hongkong-all',
      };

      expect(filterNodesByRegions('hongkong-all'))
        .to.deep.equal(expected, 'filter region will be hongkong-all');
    });

  });

});

