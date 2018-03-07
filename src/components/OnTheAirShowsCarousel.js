import React from 'react';
import Carousel from './Carousel';
import ContentCard from "./ContentCard/ContentCard";

const OnTheAirShowsCarousel = ({ categoryList, showsList }) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[1]) return <div>Loading...</div>;
  const showIds = categoryList.pages[1].ids;
  const showCards = showIds.map(id => showsList.byId[id]);

  return (
    <div>
      <h3>On The Air Shows</h3>
      <Carousel>
        {showCards.map(show => (
          <ContentCard key={show.id} show={show} />
        ))}
      </Carousel>
    </div>
  );
};

export default OnTheAirShowsCarousel;
