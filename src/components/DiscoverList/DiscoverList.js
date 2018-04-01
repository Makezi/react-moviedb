import React, { Component } from 'react';
import MovieCard from '../MovieCard/';
import Spinner from '../Spinner/';
import styles from './DiscoverList.scss';

class DiscoverList extends Component {
  componentDidMount() {
    // document.body.style.background = `linear-gradient(
    //   rgba(0, 70, 39, 0.925) 0%,
    //   rgba(9, 28, 37, 0.925) 100%
    // )`;
    // document.body.style.background = `rgb(0, 70, 39);`;
    // document.body.style.backgroundPosition = 'top center';
    // document.body.style.backgroundSize = 'cover';
    // document.body.stylebackgroundRepeat = 'no-repeat';
    // document.body.style.backgroundAttachment = 'fixed';
  }

  render() {
    const { discoverList, movieList, pageId } = this.props;
    const { isLoading, hasErrored, pages } = discoverList;
    if (hasErrored) return <div>There was an error</div>;
    if (isLoading || !pages[pageId]) {
      return (
        <div className={styles.discoverList}>
          <Spinner />
        </div>
      );
    }
    const movieIds = discoverList.pages[pageId].ids;
    const list = movieIds.map(id => movieList[id]);

    return (
      <ul className={styles.discoverList}>
        {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </ul>
    );
  }
}

export default DiscoverList;
