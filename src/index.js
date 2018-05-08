import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/index.css';

import App from './components/App';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';


// stateless functional component whose job it is to render routes
const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));


registerServiceWorker();
