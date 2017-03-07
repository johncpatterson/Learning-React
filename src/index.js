import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDDy1I83TVa3wdY1Xk8EY3i-dk6BNn3Ac8';

 //Create a new component to make some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null
		}; 

		this.videoSearch('motor trend');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos, //ES6 - could also do ({videos})...when key and value names are identical
				selectedVideo: videos[0]
			}); 
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

		return ( 
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} /> 
			</div>
		);
	}
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));