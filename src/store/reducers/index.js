import { combineReducers } from 'redux';

import { chartReducer } from './chartReducer';

export const rootReducer = combineReducers({
  chartData: chartReducer
});
