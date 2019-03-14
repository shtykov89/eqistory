import React from 'react';
import Tree from './tree';

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Tree fs={this.props.fs} />
      </div>);
  }
}
