import { default as React, Component } from 'react'
import TotalMessage from './TotalMessage'
import { totalWrapper, H3 } from './styles'

class TotalReviews extends Component{
    constructor(props){
        super(props)
        this.state={
            total:10
        }
    }
    componentWillReceiveProps(nextProps){
    let total = (parseInt(nextProps.price) + parseInt(nextProps.service) + parseInt(nextProps.accuracy)) / 3
    let rating = Math.round( (total) * 10 ) / 10

        this.setState({
            total:rating
        })

    }
    render (){
        let message = TotalMessage(this.state.total) 
        return (
            <div style={this.props.style} >
                <p >Total </p>
                <div style={totalWrapper(this.state.total)} >
                    <h3 style={H3} >{this.state.total}</h3>
                </div>
                <p style={{marginTop:'1rem'}} >{message}</p>
            </div>
        )
    }
}


export default TotalReviews