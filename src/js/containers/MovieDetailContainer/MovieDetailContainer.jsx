import React from 'react';
import { 
  updateExpenseDescription 
} from './MovieDetailAction';

export default class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }




  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateExpenseDescription(value));
  }


  render() {

    const { description } = this.props;
    return (
      <div>
        <h1>Movie Detail Container</h1>

        <p>Viewing movie {this.props.match.params.id}</p>
        <div className='form-group'>
              <label htmlFor='expense-amount'>Amount</label>
              <div className='input-group'>
                <span className='input-group-addon'>$</span>
                <input
                  type='text'
                  className='form-control'
                  id='expense-amount'
                  value={ description }
                  onChange={ this.handleAmountInput }
                />
              </div>
            </div>

      </div>
    )
  }


export default MovieDetailContainer;