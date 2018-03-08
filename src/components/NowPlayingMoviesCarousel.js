import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import ContentCard from './ContentCard/ContentCard';

const NowPlayingMoviesCarousel = ({ categoryList, moviesList }) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[1]) return <div>Loading...</div>;
  const movieIds = categoryList.pages[1].ids;
  const movieCards = movieIds.map(id => moviesList.byId[id]);

  return (
    <div>
      <Link to="/movie/now-playing">
        <h3>Now Playing Movies</h3>
      </Link>
      <Carousel>
        {movieCards.map(movie => <ContentCard key={movie.id} movie={movie} />)}
      </Carousel>
    </div>
  );
};
export default NowPlayingMoviesCarousel;
