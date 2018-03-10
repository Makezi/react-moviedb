import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import ContentCard from './ContentCard';

const CategoryCarousel = ({
  title,
  viewMoreUrl,
  categoryList,
  contentList
}) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[1]) return <div>Loading...</div>;
  const contentIds = categoryList.pages[1].ids;
  const contentCards = contentIds.map(id => contentList.byId[id]);

  return (
    <div>
      <Link to={viewMoreUrl}>
        <h3>{title}</h3>
      </Link>
      <Carousel>
        {contentCards.map(content => (
          <ContentCard key={content.id} content={content} />
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
