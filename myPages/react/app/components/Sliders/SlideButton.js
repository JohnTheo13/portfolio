import React from 'react'
import { textStyles } from './styles'

const SlideButton = props => {
	return (
		<label className="custom-toggle" style={props.style}  >
		  <input type="checkbox" onClick={props.onClick} style={{display:'none'}} />
		  <div className="slider round">
            <p style={textStyles(props.on)} >
                {props.on ? props.textOn : props.textOff }
            </p>
		  </div>   	 
		</label>
	)
}

export default SlideButton