import { combineReducers } from 'redux';

import { chartReducer } from './chartReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    chartData: chartReducer,
    filters: filterReducer
});
