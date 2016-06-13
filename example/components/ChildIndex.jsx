import React, { Component, PropTypes } from 'react'

export default class ChildIndex extends Component {

  static defaultProps = { items: 10 }
  static propTypes = { items: PropTypes.number.isRequired }
  static contextTypes = { fela: PropTypes.object.isRequired }

  render() {
    const { fela: { renderRule } } = this.context
    // create a small list of items to demonstrate nth-child, et cetera
    const arr = new Array(this.props.items + 1).join(',').split('').map((item, index) => index + 1)
    let list = arr.map((text, index) => (
      <li className={renderRule(styles)} key={`.${index}`}>
        ListItem&nbsp;
        {text}
      </li>
    ))

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

const styles = props => ({
  color: 'darkgray',
  listStyleType: 'none',
  ':nth-child(odd)': {
    backgroundColor: 'lightGray',
    color: 'blue'
  },
  ':last-child': {
    color: 'red'
  },
  ':nth-of-type(3)': {
    backgroundColor: 'rgba(30, 50, 60, 0.6)'
  },
  ':nth-of-type(3n+5)': {
    backgroundColor: 'rgba(141, 195, 131, 0.4)'
  },
  ':first-child': {
    color: 'yellow'
  }
})
