import React from 'react';
import ContentCard from "../ContentCard";
import "./ContentList.css";

const ContentList = ({ paginatedList, contentList, pageId }) => {
  const { isLoading, pages } = paginatedList;
  if (isLoading || !pages[pageId]) return <div>Loading...</div>;
  const contentIds = paginatedList.pages[pageId].ids;
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
