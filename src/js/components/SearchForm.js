/* REACT */
import React from 'react'

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit} className={props.className || ""}>
      <input
        type="text"
        placeholder="Search for..."
        value={props.inputValue}
        onChange={props.handleInputValueChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm
