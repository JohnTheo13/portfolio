import { default as React, Component } from 'react'
import SvgTest from './SvgTest'
import {Modal} from 'react-bootstrap'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = { parts: [], modal: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.partClick = this.partClick.bind(this)
  }
  open() {
    this.setState({ modal: true, parts: [] })
  }
  close() {
    this.setState({ modal: false })
  }
  partClick(part) {
    const { parts } = this.state
    let isIn = null
    if (parts.length) {
      parts.forEach((prt, index) => {
        if (prt === part) {
          isIn = index
        }
      })
    }
    console.log(isIn)
    if (isIn === null) {
      parts.push(part)
      this.setState({ parts })
    } else {
      parts.splice(isIn, 1)
      this.setState({ parts })
    }
  }
  render() {
    const parts = this.state.parts.join()
    return (
      <div>
        <input type="text" value={parts} onClick={this.open} />
        <Modal animation={false} show={this.state.modal} onHide={this.close} >
          <Modal.Body>
            <SvgTest partClick={this.partClick} />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default Test
