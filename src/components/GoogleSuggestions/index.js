import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

export class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInputByClick = value => {
    this.setState({
      searchInput: value,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-image"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-box"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="list-suggestion">
            {searchResults.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                onChangeSearchInputByClick={this.onChangeSearchInputByClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
