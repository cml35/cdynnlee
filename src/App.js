import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainAppBar from './components/MainAppBar.js';
import MainBody from './components/MainBody.js';
import MainBottomBar from './components/MainBottomBar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Switch } from '@material-ui/core';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainAppBar />
        <MainBody />
        <MainBottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
