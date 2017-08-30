import { default as React, Component } from 'react'
import { H, rangeStyle } from './styles'

class SliderInput extends Component {
	render () {
		return (
			<div style={this.props.style} >
				<p style={{color: '#b5b321'}} >{this.props.label}</p>
				<input type="range" data-drag="true" id={this.props.id}
					min={this.props.min} max={this.props.max}
					step={this.props.step} value={this.props.value}
					style={rangeStyle(this.props.value)}
					onChange={this.props.onChange}
				/>
				<h3  style={H}>
					{this.props.value}
				</h3>
			</div>
		)
	}
}

export default SliderInput