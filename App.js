import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Timestamp from './components/Timestamp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager 1" />
        <div className="container">
          <Contacts />
          <Timestamp />
        </div>
      </div>
    );
  }
}
export default App;
