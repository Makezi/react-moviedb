import React from 'react';
import Carousel from './Carousel';
import ContentCard from "./ContentCard/ContentCard";

const NowPlayingMoviesCarousel = ({ categories, movies }) => {
  const { isLoading, allIds } = categories;
  if (isLoading || allIds.length === 0) return <div>Loading...</div>;
  const movieIds = categories.byId.nowPlaying.movies.pages[1].ids;
  const moviesList = movieIds.map(id => movies.byId[id]);

  return (
    <div>
      <h3>Now Playing Movies</h3>
      <Carousel>
        {moviesList.map(movie => (
          <ContentCard key={movie.id} content={movie} />
        ))}
      </Carousel>
    </div>
  );
};

export default NowPlayingMoviesCarousel;
