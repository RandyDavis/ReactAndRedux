import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/Search_Bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAO2L7QcypiDD2EpkQdG4TZLHE9pD5phG8';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
    console.log(data);
});

// Create a new component. This component should produce some HTML
const App =  () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));