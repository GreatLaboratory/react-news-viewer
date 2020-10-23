import React from 'react';
import { Article } from '../api/news';
import NewsItem from './NewsItem';
import { NewsListBlock } from './styles/NewsList';

type NewsListProps = {
    newsList: Article[],
}

const NewsList: React.FC<NewsListProps> = ({ newsList }) => {
    return (
        <NewsListBlock>
            {newsList.map((news: Article) => <NewsItem key={news.url} news={news} />)}
        </NewsListBlock>
    );
};

export default NewsList;
