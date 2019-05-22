/* REACT */
import React from 'react'

class Search extends React.Component {
  constructor() {
    super()

    this.handleInputValueChange = this.handleInputValueChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

    this.state = { inputValue: '' }
  }

  handleInputValueChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  handleFormSubmit(e) {
    e.preventDefault()

    // do something with the value...

    this.setState({ inputValue: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Search for..."
          value={this.state.inputValue}
          onChange={this.handleInputValueChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search
