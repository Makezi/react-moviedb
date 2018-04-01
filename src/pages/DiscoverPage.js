import React, { Fragment } from 'react';
import DiscoverContainer from '../containers/DiscoverContainer';

const DiscoverPage = props => (
  <Fragment>
    <DiscoverContainer match={props.match} />
  </Fragment>
);

export default DiscoverPage;
