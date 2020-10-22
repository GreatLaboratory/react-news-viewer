import React from 'react';
import { CategoryState } from '../modules/categoryModule';
import { CategoriesBlock, Category } from './styles/Categories';

type CategoriesProps = {
    categories: CategoryState[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
    return (
        <CategoriesBlock>
            {categories.map((category: CategoryState) =>
                <Category
                    key={category.name}
                    activeClassName='active'
                    exact={category.name === 'all'}
                    to={category.name === 'all' ? '/' : `/${category.name}`}>
                    {category.text}
                </Category>
            )}
        </CategoriesBlock>
    );
};

export default Categories;
