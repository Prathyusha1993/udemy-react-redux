import React, { Component } from "react";
import SearchBar from "./searchBar";
import unsplashapi from "./api/unsplashapi";
import ImageList from "./imageList";

class App2 extends Component {
  state = {
    images: [],
  };

  handleFormSubmit = async (term) => {
    console.log(term);
    const response = await unsplashapi.get("/search/photos", {
      params: { query: term },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        Found : {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App2;
