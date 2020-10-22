import { combineReducers } from 'redux';
import news from '../modules/newsModule';
import categories from '../modules/categoryModule';

const rootReducer = combineReducers({
    news,
    categories,
});

export default rootReducer;
export type RootState = | ReturnType<typeof rootReducer>
