import React from 'react'
import ReactDOM from 'react-dom'
import Sliders from './components/Sliders/Sliders'
import SvgRow from './components/SvgMap/SvgRow'

ReactDOM.render(
  <div className="container" >
    <Sliders />
    <SvgRow />
  </div>,
  document.getElementById('app')
);