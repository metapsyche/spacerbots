import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="bg-gray-800">
        <h1 className="text-3xl font-bold text-white">SpacerBots</h1>
        <h2 className="text-white">{this.props.byline}</h2>
      </header>
    )
  }
}