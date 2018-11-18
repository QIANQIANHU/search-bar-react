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
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      currentText: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  populateResult = val => {
    this.setState({
      results: getSuggestions(val)
    });
  };

  resetResult = () => {
    this.setState({
      results: []
    });
  };

  // handleInputChange = e => {
  //   this.setState(
  //     {
  //       query: this.search.value
  //     },
  //     () => {
  //       if (this.search.value && this.search.value.length > 0) {
  //         this.populateResult();
  //       } else {
  //         this.resetResult();
  //       }
  //     },
  //     {
  //       currentText: e.target.value
  //     }
  //   );
  // };

  handleInputChange(e) {
    this.setState(
      // () => {
      //   if (e.target.value && e.target.value.length > 0) {
      //     this.populateResult(e.target.value);
      //   } else {
      //     this.resetResult();
      //   }
      // },
      {
        currentText: e.target.value,
        results: getSuggestions(e.target.value)
      }
    );
  }

  handleClick = val => {
    this.setState({
      currentText: val
    });
  };

  //  handleClick = e => {
  //   this.setState({
  //     query: ,
  //     results: getSuggestions(e)
  //   });
  // };

  // handleClick = e => {
  //   this.setState(
  //     {
  //       query: this.search.value
  //     }
  //     // () => {
  //     //   if (e && e.length > 0) {
  //     //     this.populateResult(e);
  //     //   } else {
  //     //     this.resetResult(e);
  //     //   }
  //     // }
  //   );
  // };

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
        {/* <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        /> */}
        <input
          placeholder="Search for..."
          type="text"
          // ref={input => (this.search = input)}
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
        {/* <ResultList results={this.state.results} /> */}
      </form>
    );
  }
}

export default Search;
