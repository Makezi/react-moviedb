import React from 'react';
import Carousel from './Carousel';
import ContentCard from "./ContentCard/ContentCard";

const PopularMoviesCarousel = ({ categoryList, moviesList }) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[1]) return <div>Loading...</div>;
  const movieIds = categoryList.pages[1].ids;
  const movieCards = movieIds.map(id => moviesList.byId[id]);

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel>
        {movieCards.map(movie => (
          <ContentCard key={movie.id} content={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesCarousel;
