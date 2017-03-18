import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/Search_Bar';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';

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
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));