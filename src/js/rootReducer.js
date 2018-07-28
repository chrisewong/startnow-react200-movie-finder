import { combineReducers } from 'redux';
import ExpenseReducer from '../js/containers/MovieDetailContainer/MovieDetailReducer';

const rootReducer = combineReducers({
  description: ExpenseReducer
});

export default rootReducer;
