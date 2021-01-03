import React from "react";
import "./App.css";
import LaunchList from "./LaunchList";

class App extends React.Component {
  state = {
    loading: false,
    launches: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch(" https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          launches: data,
          loading: false,
        })
      );
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <LaunchList launches={this.state.launches} />
        )}
      </div>
    );
  }
}

export default App;
