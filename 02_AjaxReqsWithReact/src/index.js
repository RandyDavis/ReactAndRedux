import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_Bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAO2L7QcypiDD2EpkQdG4TZLHE9pD5phG8';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // using "videos" as setState({}) value is the es6 shortcut to condense { videos: videos }
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));