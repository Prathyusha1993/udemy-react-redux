import React, { Component } from "react";
import youtubeApi from "./apis/youtubeApi";
import SearchBar from "./searchBar";
import VideoDetail from "./videoDetail";
import VideoList from "./videoList";

class App3 extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount(){
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtubeApi.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items,
        selectedVideo: response.data.items[0]
     });
  };

  onVideoSelect = (video) => {
    console.log("from the app!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App3;
