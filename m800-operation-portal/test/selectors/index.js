import { expect } from 'chai';
import {
  getSelectedNode,
  getNodeByIdFilter,
  getNodesByRegions,
  getNodesByIdRegions,
} from 'selectors';

describe('<selectors>', function () {
  const state = {
    node: {
      availableNodes: [
      { uniqueId: 'redis-pubsub-hk-2', region: 'hongkong-all' },
      { uniqueId: 'smsc-hk-1', region: 'hongkong-all' },
      { uniqueId: 'smsc-hk-2', region: 'china-all' },
      ],
      idFilter: '2',
      selectedRegions: ['hongkong-all'],
      selectedNodeId: 'smsc-hk-2',
    },
  };
  it('should return the selected node by Id', function () {

    expect(getSelectedNode(state))
      .to.deep.equal({ uniqueId: 'smsc-hk-2', region: 'china-all' });

  });

  it('should filter nodes by IdFilter', function () {

    expect(getNodeByIdFilter(state))
      .to.deep.equal(
      [
        { uniqueId: 'redis-pubsub-hk-2', region: 'hongkong-all' },
        { uniqueId: 'smsc-hk-2', region: 'china-all' },
      ]
    );

  });

  it('should filter nodes by selectedRegions', function () {

    expect(getNodesByRegions(state))
      .to.deep.equal(
      [
        { uniqueId: 'redis-pubsub-hk-2', region: 'hongkong-all' },
        { uniqueId: 'smsc-hk-1', region: 'hongkong-all' },
      ]
    );

  });

  it('should filter nodes by Id and selectedRegions', function () {

    expect(getNodesByIdRegions.resultFunc([{ uniqueId: 'a' }], [{ uniqueId: 'a' }]))
      .to.deep.equal([{ uniqueId: 'a' }]);

  });
});
