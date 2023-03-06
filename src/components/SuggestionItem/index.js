import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onChangeSearchInputByClick} = props
  const {suggestion} = suggestionItem
  const changeSearchInput = () => {
    onChangeSearchInputByClick(suggestion)
  }
  return (
    <li className="suggestion-list">
      <p>{suggestion}</p>
      <button
        onClick={changeSearchInput}
        type="button"
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="search-image"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
