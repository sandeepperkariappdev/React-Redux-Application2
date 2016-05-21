import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from './vendor/bootstrap-without-jquery';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";

const app = document.getElementById('app');
//optional query parameters
//<Route path="about(/:article)" component={About}></Route>
ReactDOM.render(        
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about(/:article)" name="about" component={About}></Route>
            <Route path="contact" name="contact" component={Contact}></Route>
        </Route>
    </Router>,
    app);