import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import RecentEventList from 'components/RecentEventList';
import RecentEvent from 'components/RecentEvent';

describe('<RecentEventList />', function () {

  it('contain a <RecentEvent /> tag if recentEvents has value', function () {

    const props = { recentEvents: [{ type: 'test' }, { type: 'test' }] };

    const wrRecentEventLister = shallow(<RecentEventList {...props} />);

    expect(wrRecentEventLister.find(RecentEvent)).to.have.length(props.recentEvents.length);

  });
});
