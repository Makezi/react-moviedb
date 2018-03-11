import React from 'react';
import ContentCard from "../ContentCard";
import "./ContentList.css";

const ContentList = ({ categoryList, contentList, pageId }) => {
  const { isLoading, pages } = categoryList;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const contentIds = categoryList.pages[pageId].ids;
  const contentCards = contentIds.map(id => contentList.byId[id]);

  return (
    <div>
      <div className="content-list">
        {contentCards.map(content => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default ContentList;
