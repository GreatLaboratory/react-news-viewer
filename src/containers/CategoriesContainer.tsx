import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Categories from '../components/Categories';
import { RootState, } from '../modules';
import { CategoryState, getCategory } from '../modules/categoryModule';

const CategoriesContainer: React.FC = () => {
    const categories: CategoryState[] = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);
    return (
        <Categories categories={categories} />
    );
};

export default React.memo(CategoriesContainer);
