import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = props => {
  const step = Math.round(Math.floor(props.children.length / 4));
  let indexes = [];
  for (let i = 0; i < props.children.length; i += step) {
    indexes.push(i);
  }

  const settings = {
    naturalSlideWidth: 180,
    naturalSlideHeight: 250,
    totalSlides: props.children.length,
    visibleSlides: step,
    step: step
  };

  return (
    <CarouselProvider {...settings}>
      <Slider>
        {props.children.map((child, index) => (
          <Slide key={index} index={index}>
            {child}
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      {indexes.map(index => <Dot key={index} slide={index} />)}
    </CarouselProvider>
  );
};

export default Carousel;
