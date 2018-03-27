import React from 'react';
import DiscoverContainer from '../containers/DiscoverContainer';

const DiscoverPage = props => (
  <div>
    <DiscoverContainer params={props.match.params} />
  </div>
);

export default DiscoverPage;
