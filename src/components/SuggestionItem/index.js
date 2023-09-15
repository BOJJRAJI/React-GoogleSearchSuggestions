import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, getSuggestion} = props
  const {suggestion} = suggestionDetails

  function sendSuggestion() {
    getSuggestion(suggestionimport './index.css'

const SuggestionItem = props => {
  const {item, sendSuggestion} = props
  const {suggestion} = item

  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button
        className="button"
        onClick={() => sendSuggestion(suggestion)}
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem

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
