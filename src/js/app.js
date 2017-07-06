import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';

import App from 'views/App';
import Home from 'views/Home';
import About from 'views/About';


ReactDOM.render(
  <Router history={ hashHistory }>
    
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('root') 
);


