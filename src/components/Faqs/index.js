import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {k: [false, false, false, false]}

  ShowContent = id => {
    if (id === 0) {
      this.setState(prevState => ({
        k: [!prevState.k[0], prevState.k[1], prevState.k[2], prevState.k[3]],
      }))
    } else if (id === 1) {
      this.setState(prevState => ({
        k: [prevState.k[0], !prevState.k[1], prevState.k[2], prevState.k[3]],
      }))
    } else if (id === 2) {
      this.setState(prevState => ({
        k: [prevState.k[0], prevState.k[1], !prevState.k[2], prevState.k[3]],
      }))
    } else {
      this.setState(prevState => ({
        k: [prevState.k[0], prevState.k[1], prevState.k[2], !prevState.k[3]],
      }))
    }
  }

  render() {
    const {k} = this.state
    const {faqsList} = this.props

    return (
      <div className="app-container">
        <ul className="list-items-container">
          <h1 className="heading">FAQs</h1>
          {faqsList.map(each => (
            <FaqItem
              key={each.id}
              details={each}
              ShowContent={this.ShowContent}
              isActive={k[each.id]}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
