import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route, Redirect, Link} from 'react-router-dom';
import BaseLayout from "./components/layout/BaseLayout"
import AboutUs from "./components/AboutUs"
import Blogs from "./components/Blogs"
import ContactUs from "./components/ContactUs"
import Stepper from "./components/Stepper"
import Movies from "./components/Movies"
import ToDo from "./components/ToDo"
// import Error from "./components/Error"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogsID" component={Blogs}/>
        <Redirect from="/aboutus" to="/" />
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/movies" component={Movies}/>
        <Route path="/todo" component={ToDo}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/stepper" component={Stepper}/>
        <Route path="/" component={App}/>
        <Route component={App}/>

      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById('root')
);


