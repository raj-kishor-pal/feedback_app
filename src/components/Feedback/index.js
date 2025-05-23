// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackReceived: false}

  onEmojiClick = () => {
    this.setState({feedbackReceived: true})
  }

  render() {
    const {feedbackReceived} = this.state
    const {resources} = this.props
    const {emojis} = resources

    let feedbackDisplay

    if (feedbackReceived === false) {
      feedbackDisplay = (
        <>
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emoji-container">
            {emojis.map(eachEmoji => (
              <li key={eachEmoji.id} onClick={this.onEmojiClick}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-style"
                />
                <p>{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </>
      )
    } else {
      feedbackDisplay = (
        <>
          <img
            src={resources.loveEmojiUrl}
            alt="love emoji"
            className="love-emoji-style"
          />
          <h1>Thank You!</h1>
          <p>
            We will use your feedback to improve our customer support
            performance
          </p>
        </>
      )
    }

    return (
      <div className="bg-container">
        <div className="feedback-card">{feedbackDisplay}</div>
      </div>
    )
  }
}

export default Feedback
