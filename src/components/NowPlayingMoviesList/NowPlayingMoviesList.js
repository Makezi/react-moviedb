import React from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../ContentCard/ContentCard';
import './NowPlayingMoviesList.css';

const NowPlayingMoviesList = ({ categoryList, moviesList, pageId }) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const movieIds = categoryList.pages[pageId].ids;
  const movieCards = movieIds.map(id => moviesList.byId[id]);
  const prevPage = +pageId - 1;
  const nextPage = +pageId + 1;

  return (
    <div>
      <div className="content-list">
        {movieCards.map(movie => <ContentCard key={movie.id} movie={movie} />)}
      </div>
      <Link to={`/movie/now-playing/${prevPage}`}>Previous</Link>
      <Link to={`/movie/now-playing/${nextPage}`}>Next</Link>
    </div>
  );
};
export default NowPlayingMoviesList;
