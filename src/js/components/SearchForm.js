/* REACT */
import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = props => {
  return (
    <form onSubmit={props.handleFormSubmit} className={props.className || ''}>
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

SearchForm.propTypes = {
  handleFormSubmit: PropTypes.func,
  className: PropTypes.string,
  inputValue: PropTypes.string,
  handleInputValueChange: PropTypes.func
}
// https://www.npmjs.com/package/prop-types

export default SearchForm
