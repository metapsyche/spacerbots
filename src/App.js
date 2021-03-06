import { FC, ReactNode } from 'react';
import './App.css';

import Header from './components/Header';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import Footer from './components/Footer';

/**
type Props = {
  children: ReactNode
}
*/

const App = ({ children }) => (
  <>
    <div className="App">
      {children}
    </div>
    {/* <div style={{clear: 'both'}}></div>
    <Footer copyright="2022"></Footer> */}
  </>
)

export default App;