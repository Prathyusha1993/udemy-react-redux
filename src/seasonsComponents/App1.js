//import './App.css';
import React, { Component } from "react";
import Loader from "./loader";
import SeasonDisplay from "./seasonDisplay";

class App1 extends Component {
  state = {
    lat: null,
    long: null,
    errorMessage: "",
  };

  componentDidMount() {
    console.log("My compoennt was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error Message: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return <SeasonDisplay lat={this.state.lat} long={this.state.long} />;
    }

    return <Loader />;
  };

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App1;
