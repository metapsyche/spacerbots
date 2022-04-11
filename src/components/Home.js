import React, { Component, UseState } from 'react';
import ReactDOM from 'react-dom';
import { node } from 'prop-types';

import Paginator from './paginator';

function Home() {
  return (
    <div className="Home">
      <h1>Homepage</h1>

      <Paginator></Paginator>
    </div>
  );
}

export default Home;
