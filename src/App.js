import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/'  component={Home}/>
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </Router>
     
    </Fragment>
  );
}

export default App;
