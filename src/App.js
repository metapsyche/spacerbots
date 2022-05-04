import { FC, ReactNode } from 'react';
import './App.css';

import Header from './components/Header';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import Footer from './components/Footer';

import { DataStore } from '@aws-amplify/datastore';
import { Spacers } from './models';

import { ItemCard} from './ui-components';

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
  </>
)

export default App;