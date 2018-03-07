import React from 'react';
import Carousel from './Carousel';
import ContentCard from "./ContentCard/ContentCard";

const PopularMoviesCarousel = ({ categoryList, moviesInfo }) => {
  // const { isLoading, allIds } = categories;
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[1]) return <div>Loading...</div>;
  const movieIds = categoryList.pages[1].ids;
  const moviesList = movieIds.map(id => moviesInfo.byId[id]);
  // if (isLoading || allIds.length === 0) return <div>Loading...</div>;
  // const movieIds = categories.byId.popular.movies.pages[1].ids;
  // const moviesList = movieIds.map(id => movies.byId[id]);

  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel>
        {moviesList.map(movie => (
          <ContentCard key={movie.id} content={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesCarousel;
