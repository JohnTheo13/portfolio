import { default as React, Component } from 'react'
import TotalMessage from './TotalMessage'
import { totalWrapper, H3 } from './styles'

const TotalReviews = props => (
    <div style={props.style} >
        <p >Total </p>
        <div style={totalWrapper(props.total)} >
            <h3 style={H3} >{props.total}</h3>
        </div>
        <p style={{marginTop:'1rem'}} >{TotalMessage(props.total) }</p>
    </div>
)

export default TotalReviews