import React from 'react';
import {render} from "react-dom";
import { HashRouter as Router } from "react-router-dom" 

import Layout from "./components/layout/Layout"

class App extends React.Component {
  render() {
    return (
        <Router>
            <Layout />
        </Router>
    );
  }
}

export default App;
