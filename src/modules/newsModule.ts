import { getNewsList, Article } from '../api/news';

const GET_NEWS_LIST = 'news/GET_NEWS_LIST' as const;
const GET_NEWS_LIST_SUCCESS = 'news/GET_NEWS_LIST_SUCCESS' as const;
const GET_NEWS_LIST_ERROR = 'news/GET_NEWS_LIST_ERROR' as const;

const getNewsListAction = () => ({
    type: GET_NEWS_LIST    
});
const getNewsListSuccessAction = (data: Article[]) => ({
    type: GET_NEWS_LIST_SUCCESS,
    payload: data
});
const getNewsListErrorAction = (error: Error) => ({
    type: GET_NEWS_LIST_ERROR,
    payload: error
});

type NewsState = {
    loading: boolean,
    data: Article[],
    error: Error | null,
}

const initialState: NewsState = {
    loading: false,
    data: [],
    error: null
};

type NewsAction =
    | ReturnType<typeof getNewsListAction>
    | ReturnType<typeof getNewsListSuccessAction>
    | ReturnType<typeof getNewsListErrorAction>

export const getNewsListThunk = (category: string) => async (dispatch: any) => {
    dispatch({ type: GET_NEWS_LIST });
    try {
        const result = await getNewsList(category);
        dispatch({ type: GET_NEWS_LIST_SUCCESS, payload: result });
    } catch (err) {
        dispatch({ type: GET_NEWS_LIST_ERROR, payload: err });
        throw err;
    }
};

const reducer = (state: NewsState = initialState, action: NewsAction) => {
    switch (action.type) {
    case GET_NEWS_LIST:
        return {
            loading: true,
            data: [],
            error: null,
        };
    case GET_NEWS_LIST_SUCCESS:
        return {
            loading: false,
            data: action.payload,
            error: null,
        };
    case GET_NEWS_LIST_ERROR:
        return {
            loading: false,
            data: [],
            error: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;
