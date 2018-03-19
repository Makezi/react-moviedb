import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDiscoverShows } from '../../actions/discovers';
import Header from '../../components/Header/';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class DiscoverShowsPage extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchDiscoverShows(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchDiscoverShows(nextProps.match.params.page);
    }
  }

  render() {
    const { showsList, discoverShowsList } = this.props;
    const { params, path } = this.props.match;
    const basePath = path.substring(0, path.indexOf(':'));
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = discoverShowsList;

    return (
      <div>
        <Header />
        <ContentList
          categoryList={discoverShowsList}
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
    discoverShowsList: state.discovers.shows
  };
};

export default connect(mapStateToProps, { fetchDiscoverShows })(
  DiscoverShowsPage
);
