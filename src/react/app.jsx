import React from 'react';
import MainPage from './mainPage';

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <MainPage fs={this.props.fs} />
      </div>);
  }
}
