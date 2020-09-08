import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   // super keyword allows us to access constructor of parent class
  //   super(props);

  //   // This is the only time that we do a direct assignment
  //   // to this.state
  //   this.state = { lat: null, errorMessage: "" };
  // }

  // Alternative method
  state = { lat: null, errorMessage: "" };

  // This lifecycle method is executed immediately after the component is rendered
  // It is only executed only once!
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Anytime we want to update state, we must call setState()
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please accept location request..." />;
  }

  // React expects us to define render()
  render() {
    return <div className="fake class name">{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
