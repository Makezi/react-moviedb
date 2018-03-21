import React, { Component } from 'react';
import placeholder from '../../images/placeholder-poster.png';
import './LazyImage.css';

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  onHandleLoad() {
    this.setState({ loaded: true });
  }

  componentDidMount() {
    // const hdLoaderImg = new Image();
    this.img = new Image();
    this.img.onload = this.onHandleLoad.bind(this);
    this.img.src = this.props.src;
  }

  render() {
    const { src, alt, children } = this.props;
    const image = this.state.loaded ? src : placeholder;

    return (
      <div className="image">
        {children ? (
          <div
            className="backdrop"
            style={{ backgroundImage: `url(${image})` }}
          >
            {children}
          </div>
        ) : (
          <img src={`${image}`} alt={`${alt}`} />
        )}
      </div>
    );
  }
}

export default LazyImage;
