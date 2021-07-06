import React, { Component } from 'react';
import youtubeApi from './apis/youtubeApi';
import SearchBar from './searchBar';
import VideoList from './videoList';

class App3 extends Component {
    state={
        videos:[],
    };

    onTermSubmit = async term => {
        console.log(term);
        const response = await youtubeApi.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items })
    };
    
    render() {
        return(
            <div>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
};

export default App3;