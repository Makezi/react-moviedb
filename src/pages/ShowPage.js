import React from 'react';
import ShowDetailContainer from '../containers/ShowDetailContainer';

const ShowPage = ({ match }) => (
  <div>
    <ShowDetailContainer id={match.params.id} />
  </div>
);

export default ShowPage;
