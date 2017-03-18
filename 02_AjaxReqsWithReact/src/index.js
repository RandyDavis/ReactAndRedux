import _ from 'lodash';
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

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('react js')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // using "videos" as setState({}) value is the es6 shortcut to condense { videos: videos } ONLY when the string text matches for the key and value
        });

    }

    render() {
        const VideoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ VideoSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));