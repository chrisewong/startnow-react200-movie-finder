const defaultState = {
    description: '',
    
  };
  
  export default function ExpenseReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      // Here in the case of the update description action 
      case 'UPDATE_EXPENSE_DESCRIPTION': {
        // we'll return an object
        return {
          // with all the previous state
          ...state,
          // but overwriting the description
          description: payload.description
        };
      }
  
      
      default: {
        return state;
      }
    }
  }
  
  