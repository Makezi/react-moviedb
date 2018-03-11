import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnTheAirShows } from '../../actions/categories';
import Header from '../../components/Header/';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class OnTheAirShowsPage extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchOnTheAirShows(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page != this.props.match.params.page) {
      this.props.fetchOnTheAirShows(nextProps.match.params.page);
    }
  }

  render() {
    const { showsList, onTheAirShows } = this.props;
    const { params } = this.props.match;
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const basePath = '/show/on-air/';
    const { totalPages, totalResults } = onTheAirShows;

    return (
      <div>
        <Header />
        <ContentList
          categoryList={onTheAirShows}
          contentList={showsList}
          pageId={pageId}
        />
        <Paginator
          basePath={basePath}
          prevPageId={prevPageId}
          nextPageId={nextPageId}
          totalPages={totalPages}
          totalResults={totalResults}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showsList: state.shows,
    onTheAirShows: state.categories.shows.onTheAir
  };
};

export default connect(mapStateToProps, { fetchOnTheAirShows })(
  OnTheAirShowsPage
);
