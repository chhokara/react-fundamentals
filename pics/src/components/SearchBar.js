import React from "react";

// Controlled components contain their own data
// Uncontrolled components have their data stored in the DOM
class SearchBar extends React.Component {
  state = { term: "" };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onFormSubmit(event) {
  //   event.preventDefault();

  //   // This line will result in an error because 'this' is undefined when
  //   // onFormSubmit() is called on its own (nothing is defined to the left of the dot)
  //   console.log(this.state.term);
  // }

  // By using an arrow function instead, we can ensure that 'this'
  // is always equal to our instance of SearchBar

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
