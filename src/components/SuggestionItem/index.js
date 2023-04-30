import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getSuggestion} = props
  const {suggestion} = suggestionDetails

  function sendSuggestion() {
    getSuggestion(suggestion)
  }
  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={sendSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
