import React, { Component } from 'react';
import SearchBar from '../containers/Search_Bar';
import WeatherList from '../containers/Weather_List';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
