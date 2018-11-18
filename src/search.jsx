import React, { Component } from "react";

function getSuggestions(prefix) {
  const result = Array.from(new Array(10), function(x, i) {
    return i;
  }).map(function(x) {
    return prefix + "_mock_" + x;
  });
  return result;
  const delay = Math.random() * 800 + 200; // delay 200~1000ms
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, delay, result);
  });
  return delay;
}

const ResultList = props => {
  const options = props.results.map(r => <li key={r.id}>{r.name}</li>);
  return <ul>{options}</ul>;
};

class Search extends Component {
  state = {
    query: "",
    results: [],
    currentText: ""
  };

  // populateResult = val => {
  //   this.setState({
  //     results: getSuggestions(val)
  //   });
  // };

  resetResult = () => {
    this.setState({
      results: []
    });
  };

  handleInputChange = e => {
    const eventValue = e.target.value;
    this.setState(
      {
        currentText: eventValue
      },
      () => {
        if (eventValue.length > 0) {
          this.setState({ results: getSuggestions(eventValue) });
        } else {
          this.resetResult();
        }
      }
    );
  };

  handleClick = val => {
    this.setState({
      currentText: val
    });
  };

  render() {
    return (
      <form>
        <p>
          <img
            src={"https://www.bing.com/sa/simg/bing_p_rr_teal_min.ico"}
            alt="boohoo"
            className="icon"
          />
          Bing
        </p>

        <input
          placeholder="Search for..."
          type="text"
          value={this.state.currentText}
          onChange={this.handleInputChange}
        />
        <ul>
          {this.state.results.map(result => (
            <li value={result} onClick={() => this.handleClick(result)}>
              {result}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

export default Search;
