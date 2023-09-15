import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  setSearchValue = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const filterData = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="data-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                placeholder="Search Google"
                type="search"
                className="input-element"
                onChange={this.getSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="lists-container">
              {filterData.map(item => (
                <SuggestionItem
                  item={item}
                  key={item.id}
                  sendSuggestion={this.setSearchValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
