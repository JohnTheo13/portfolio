import React from 'react'
import ReactDOM from 'react-dom'
import { Col } from 'react-bootstrap'
import Sliders from './components/Sliders/Sliders'
import SvgRow from './components/SvgMap/SvgRow'
import { Button } from 'small-bricks'

ReactDOM.render(
  <div className="container" >
    <Sliders />
    <SvgRow />

      <Button tag="cta" size="medium" >heyy</Button>

  </div>,
  document.getElementById('app')
);