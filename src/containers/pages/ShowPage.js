import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShow } from '../../actions/shows';
import ContentDetail from '../../components/ContentDetail';

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShow(id);
  }

  render() {
    const { showsList } = this.props;
    const { isLoading } = showsList;
    const { id } = this.props.match.params;
    const content = showsList.byId[id];
    return (
      <div>
        <ContentDetail isLoading={isLoading} content={content} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showsList: state.shows
  };
};

export default connect(mapStateToProps, { fetchShow })(ShowPage);
