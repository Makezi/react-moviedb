import React, { Component } from "react";
import { connect } from "react-redux";

class CarouselContainer extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { contentList } = this.props;
    const { categoryList } = this.props;

    return (
      <div>Hello</div>
    )
  }
}

const mapStateToProps = () => {
  return {
    contentList: this.props.contentList,
    categoryList: this.props.categoryList
  }
}

export default connect(mapStateToProps)(CarouselContainer);