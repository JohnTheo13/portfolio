import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'
import SliderInput from './SliderInput'
import TotalReviews from './TotalReviews'
import { inputSlide, totalStyle } from './styles'
import SlideButton from './SlideButton'


class SlidersSection extends Component {

    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this)
        this.toogleButton = this.toogleButton.bind(this)
        this.state={
            price:10,
            service:10,
            accuracy:10,
            toogle: true,
            total: 10,
        }
    }

    handleChange (e) {      
        //let x = document.getElementById("myRange").value
        if(e.target.id=="price"){
            let total = Math.round(((parseInt(e.target.value) + parseInt(this.state.service) + parseInt(this.state.accuracy)) / 3) * 10) / 10
            this.setState({ total })
            this.setState({
              price: e.target.value
            })
        } else if (e.target.id=="service"){
            let total = Math.round(((parseInt(this.state.price) + parseInt(e.target.value) + parseInt(this.state.accuracy)) / 3) * 10) / 10
            this.setState({ total })
            this.setState({
              service: e.target.value
            })
        } else if (e.target.id=="accuracy"){
            let total = Math.round(((parseInt(this.state.price) + parseInt(this.state.service) + parseInt(e.target.value)) / 3) * 10) / 10
            this.setState({ total })
            this.setState({
              accuracy: e.target.value
            })            
        }
    }

    toogleButton(){
        let toogle=this.state.toogle
        this.setState({
            toogle: !toogle
        })
    }

    render () {   
        return (
        <Row>
            <Col  md={4} >
              {this.state.toogle &&
              <Row>
                    <Col xs={12} >
                        <SliderInput min="0" max="10" step="0.5" 
                            value={this.state.price}
                            onChange={this.handleChange}
                            label="Price"
                            style={inputSlide}
                            id="price" /> 
                    </Col>
                    <Col xs={12} >
                        <SliderInput min="0" max="10" step="0.5" 
                            value={this.state.service}
                            onChange={this.handleChange}
                            label="Service"
                            style={inputSlide}
                            id="service" /> 
                    </Col>
                    <Col xs={12} >
                        <SliderInput min="0" max="10" step="0.5" 
                            value={this.state.accuracy}
                            onChange={this.handleChange}
                            label="Quality"
                            style={inputSlide}
                            id="accuracy" /> 
                    </Col>
                </Row>
            }
            </Col>
            <Col md={2} >
             {this.state.toogle &&
                <TotalReviews  
                    total={this.state.total}
                    style={totalStyle}
                        />}
            </Col>
            <Col md={6}>
            <p>Fancy React inputs play around to see what happens</p>
                  <SlideButton
                    on={this.state.toogle}
                    textOn='Yes'
                    textOff='No'
                    onClick={this.toogleButton}
                    style={{margin:'24px 100px'}}
                />
            </Col>
        </Row>
        )
    }
}

export default SlidersSection