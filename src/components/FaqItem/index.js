import './index.css'

const FaqItem = props => {
  const {details, ShowContent, isActive} = props
  const {questionText, answerText, id} = details

  const showText = () => {
    ShowContent(id)
  }
  const altValue = isActive ? 'minus' : 'plus'
  const image = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  return (
    <li className="list-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="button" onClick={showText}>
          <img src={image} alt={altValue} />
        </button>
      </div>
      {isActive && (
        <div>
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
