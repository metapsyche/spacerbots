import { FC, ReactNode } from 'react';
import './App.css';

import Header from './components/Header';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import Navbar from './components/Navbar';

/**
type Props = {
  children: ReactNode
}
*/

const App = ({ children }) => (
  <div className="App">
    <Header byline="Robots made of Spacers" />
    <Navbar></Navbar>
    {children}
  </div>
)

export default App;