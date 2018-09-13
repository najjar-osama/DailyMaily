import React, { Component } from 'react';
import Layout from "./components/Layout";
import "../node_modules/normalize.scss/normalize.scss";
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}
export default App;
