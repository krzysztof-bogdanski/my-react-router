import React from "react";
import {render} from "react-dom";
import { HashRouter as Router } from "react-router-dom" 

//import Layout from "./components/layout/Layout";
import App from "./App";

render(
    // <Router>
    //     <Layout />
    // </Router>
    <App />
    ,document.getElementById('app')
);