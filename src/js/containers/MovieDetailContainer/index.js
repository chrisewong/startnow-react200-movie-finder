import { connect } from 'react-redux';
import ExpenseEntries from '../MovieDetailContainer';import expenseReducer from './expenseReducer';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    description: store.expense.description
    
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(ExpenseEntries);
