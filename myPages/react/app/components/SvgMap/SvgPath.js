import React, { Component } from 'react'

class SvgPath extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
    this.onClick = this.onClick.bind(this)
  }
  onClick(val) {
    this.setState({clicked:!this.state.clicked})
    console.log(this)
    this.props.onClick(this.props.name)
  }
  render() {
    return <path className={this.props.className} name={this.props.name} ref={this.props.refname}
    d={this.props.d} style={style(this.state.clicked)}
    onClick={this.onClick} />
  }
}

export default SvgPath

const style = (clicked) => {
  const fill = clicked ? 'green' : null
  return {
    fill,
  }
}
