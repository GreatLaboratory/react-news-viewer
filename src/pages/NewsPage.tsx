import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CategoriesContainer from '../containers/CategoriesContainer';
import NewsContainer from '../containers/NewsContainer';

type NewsPageProps = {
    category: string;
}

const NewsPage: React.FC<RouteComponentProps<NewsPageProps>> = ({ match }) => {
    const category: string = match.params.category || 'all';
    return (
        <div>
            <CategoriesContainer />
            <NewsContainer category={category} />
        </div>
    );
};

export default NewsPage;
