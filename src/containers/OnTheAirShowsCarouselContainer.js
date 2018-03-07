import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnTheAirShows } from '../actions/categories';
import OnTheAirShowsCarousel from '../components/OnTheAirShowsCarousel';

class OnTheAirShowsCarouselContainer extends Component {
  componentDidMount() {
    this.props.fetchOnTheAirShows();
  }

  render() {
    const { showsList } = this.props;
    const { categoryList } = this.props;

    return (
      <OnTheAirShowsCarousel
        categoryList={categoryList}
        showsList={showsList}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    showsList: state.shows,
    categoryList: state.categories.shows["onTheAir"]
  };
};

export default connect(mapStateToProps, { fetchOnTheAirShows })(
  OnTheAirShowsCarouselContainer
);
