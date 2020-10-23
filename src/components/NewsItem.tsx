import React from 'react';
import { Article } from '../api/news';
import { NewsItemBlock } from './styles/NewsItem';

type NewsItemProps = {
    news: Article
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    const { title, description, url, urlToImage } = news;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <img src={urlToImage} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target='_blank' rel='noopener noreferrer'>{title}</a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;
