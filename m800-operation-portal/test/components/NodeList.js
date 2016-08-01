/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import NodeList from 'components/NodeList';
import ServerNode from 'components/ServerNode';

describe('<NodeList />', function () {

  const defaultProps = {
    nodes: [{ uniqueId: 'a', region: 'hk' }],
    onItemClick: () => {},
  };


  it('should contain <ServerNode /> tag if the nodes has value', function () {

    const wrapper = shallow(<NodeList {...defaultProps} />);

    expect(wrapper.find(ServerNode)).to.have.length(defaultProps.nodes.length);

  });

  it('should call the onItemClick function if the ServerNode is clicked', function () {

    const spy = sinon.spy();
    const props = Object.assign({}, defaultProps, {
      onItemClick: spy,
    });

    const wrapper = shallow(<NodeList {...props} />);

    wrapper.find(ServerNode).at(0).simulate('click');

    expect(spy.calledOnce).to.be.true;

  });

});
