import React from 'react';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div>

        <h1>Movie Search Container</h1>
      </div>
      <div className='form-group'>
                    <label htmlFor='income-amount'>Amount</label>
                    <div className='input-group'>
                      <span className='input-group-addon'>$</span>
                      <input
                        type='text'
                        className='form-control'
                        id='income-amount'
                      />
                    </div>
      </div>
      </div>
    )
  }
}

export default MovieSearchContainer;