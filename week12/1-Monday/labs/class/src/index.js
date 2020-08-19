import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout.js'
import App from './App';
import Forms from './components/Forms';
import ProjectManagement from './components/projects/ProjectManagement';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/forms" component={Forms}/>
        <Route path="/projects" component={ProjectManagement}/>

        <Route component={App}/>
        
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
