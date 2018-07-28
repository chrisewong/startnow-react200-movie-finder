/* Add these import statements */
import React from 'react';
// import { 
//   HashRouter as Router, 
//   Route 
// } from 'react-router-dom';

import MovieSearchContainer from '../js/containers/MovieSearchContainer/MovieSearchContainer';
import MovieDetailContainer from '../js/containers/MovieDetailContainer/MovieDetailContainer';
/* Incorporate this example into your code */
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}
