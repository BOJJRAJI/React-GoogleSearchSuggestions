import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getSearchInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  getSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="card">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input-element"
              type="search"
              placeholder="Search Google"
              onChange={this.getSearchInputValue}
              value={searchInput}
            />
          </div>
          <ul className="search-content">
            {searchResult.map(eachSearch => (
              <SuggestionItem
                suggestionDetails={eachSearch}
                key={eachSearch.id}
                getSuggestion={this.getSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
