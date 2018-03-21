import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentList from '../../components/ContentList/';
import Paginator from '../../components/Paginator';

class CategoryPage extends Component {
  componentDidMount() {
    const page = this.props.match.params.page || 1;
    this.props.fetchCategory(page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.page !== this.props.match.params.page) {
      this.props.fetchCategory(nextProps.match.params.page);
    }
  }

  render() {
    const { contentList, categoryList } = this.props;
    const { params, path } = this.props.match;
    const basePath = path.substring(0, path.indexOf(':'));
    const pageId = params.page || 1;
    const nextPageId = +pageId + 1;
    const prevPageId = +pageId - 1;
    const { totalPages, totalResults } = categoryList;

    return (
      <div>
        <ContentList
          paginatedList={categoryList}
          contentList={contentList}
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

const mapStateToProps = (state, ownProps) => {
  const { namespace, category } = ownProps;
  return {
    contentList: state[namespace],
    categoryList: state.categories[namespace][category]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = ownProps;
  return {
    fetchCategory: page => dispatch(action(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
