import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentDetail from '../../components/ContentDetail';

class ContentPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchContent(id);
  }

  render() {
    const { contentList } = this.props;
    const { isLoading } = contentList;
    const { id } = this.props.match.params;
    const content = contentList.byId[id];
    return (
      <div>
        <ContentDetail isLoading={isLoading} content={content} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { namespace } = ownProps;
  return {
    contentList: state[namespace]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { action } = ownProps;
  return {
    fetchContent: id => dispatch(action(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentPage);
