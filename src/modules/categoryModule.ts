const GET_CATEGORYLIST = 'category/GET_CATEGORYLIST' as const;

export const getCategory = () => ({
    type: GET_CATEGORYLIST
});

export type CategoryState = {
    name: string,
    text: string,
}

type CategoryAction = 
    | ReturnType<typeof getCategory>

const initialState: CategoryState[] = [
    {
        name: 'all',
        text: '전체보기',
    },
    {
        name: 'business',
        text: '비즈니스',
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트',
    },
    {
        name: 'health',
        text: '건강',
    },
    {
        name: 'science',
        text: '과학',
    },
    {
        name: 'sports',
        text: '스포츠',
    },
    {
        name: 'technology',
        text: '기술',
    },
];

const reducer = (state: CategoryState[] = initialState, action: CategoryAction) => {
    switch (action.type) {
    case GET_CATEGORYLIST:
        return state;         
    default:
        return state;
    }
};

export default reducer;
