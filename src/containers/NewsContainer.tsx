import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsList from '../components/NewsList';
import { RootState } from '../modules/index';
import { getNewsListThunk } from '../modules/newsModule';

type NewsListProps = {
    category: string
}

const NewsContainer: React.FC<NewsListProps> = ({ category }) => {
    const { data, loading, error } = useSelector((state: RootState) => state.news);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsListThunk(category));
    }, [dispatch, category]);

    return (
        <>
            {loading && (<div>로딩중....</div>)}
            {error && (<div>에러....</div>)}
            {data && <NewsList newsList={data} />}
        </>
    );
};

export default React.memo(NewsContainer);
