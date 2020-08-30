import React, {useRef, useState} from 'react'
<<<<<<< HEAD
import Button from 'react-bootstrap/Button';
import Graph from './Graph'
import  { Parser} from 'expr-eval'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
=======
import  { Parser} from 'expr-eval'
import {Card, Container, Row, Col, Button, Form} from 'react-bootstrap'
>>>>>>> 6ae8efdabecc05febb772ff2fded32c45fe93ec1

var parser= new Parser()

class InputCard extends React.Component {
  constructor(){
    super();
    this.state ={
      xi : 0,
      xf : 1,
      fx : "",
      step : 1
    };
  }

  handleChange = (evt) =>{
      this.setState({[evt.target.name] : Math.round(evt.target.value)});

  }

  handleText = (evt) =>{
    this.setState({fx: evt.target.value})
  }

  handleXs = (evt) => {
    if(evt.target.name == 'fx')
      this.setState({fx: evt.target.value})
    if(this.state.xi <= this.state.xf){
      try{
        var expr1 = parser.parse(this.state.fx)
        //console.log(expr1)
        var aux = []
        var aux1 = []
        for(var i= this.state.xi, j = 0; i <= this.state.xf; i += this.state.step){
          //console.log(fx)
          //console.log("x= ", i, " y= ", expr1.evaluate({x : i}))
          aux1 = parseFloat(expr1.evaluate({x : i}))
          
          if(aux1 % 1 != 0){
            aux1 = Math.floor(aux1) + 0.5;
          }
          if( aux1 <= 23.5 && aux1 >= -19.5){
            aux[j] = (aux1);
            j++;
          }
          //console.log(gPoints.values())
        }
        //console.log(aux);
        this.props.updateSong(aux,this.state.xi,this.state.xf,this.state.step, this.props.index);
      }catch(error){
        alert("type a valid function.");
      }
    }else{ 
      alert("xf has to be greater or equal than xi");
    }
  }
<<<<<<< HEAD
  
  return (
    <>
      <Container>
      <Row>
        <Col>
        <form>
          <label>Y  =  <input ref = {fxRef} type="Text" ></input></label>
          <br></br>
          <label>Xi= <input ref = {xiRef} type="Number" style={{width:40}}></input></label>
          <label> Xf = <input ref = {xfRef} type="Number" style={{width:40}}></input></label>
          <label> step = <input ref = {stepRef} type="Number" style={{width:40}}></input></label>
        </form>
        </Col>
        <Col>
        <>
        <style type="text/css">
        {`
        .btn-flat {
          background-color: #2E4C80;
          color: white;
        }
    
        .btn-xxl {
          padding: 0.5rem 1.0rem;
          font-size: 1.0rem;
        }
        `}
        </style>
  
        <Button onClick={handleXs} variant="flat" size="xxl">Music</Button>
          <Graph gPoints={gPoints}/>
        </>
        </Col>  
      </Row>
      <Graph gPoints={gPoints}/>
      <Row>
      </Row>
    </Container>
      
    </>
  )
=======

  handleConfirm = (evt) =>{
    evt.preventDefault();
    this.handleXs(evt);
  }

  render(){
    return (
      /*<div>
        <form>
          
          <label>Xi= <input name = "xi" type="number" step = '1' style={{width:40}} onChange = {this.handleChange}></input></label>
          <label> Xf = <input name = "xf" type="number" step = '1' style={{width:40}} onChange = {this.handleChange}></input></label>
          <label> step = <input name = "step" min = {1} type="number" style={{width:40}} onChange = {this.handleChange}></input></label>
          <br></br>
          <br></br>
          <label>Y  =  <input name = "fx" type="text" onChange = {this.handleText}></input></label>
          <br></br>
          <button  onClick={this.handleConfirm} style = {{marginLeft: "2.5em"}}>confirm</button> 
        </form>
        
      </div>*/
          <Card>
            <Card.Header as="h3">Write a Function</Card.Header>
            <Card.Body>
              <Form>
                  <Row>
                    <Col xs="12" md="4">
                      <Form.Label>Xi= <Form.Control name = "xi" type="number" step = '1'  onChange = {this.handleChange}></Form.Control></Form.Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Form.Label> Xf = <Form.Control name = "xf" type="number" step = '1'  onChange = {this.handleChange}></Form.Control></Form.Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Form.Label> step = <Form.Control name = "step" min = {1} type="number"  onChange = {this.handleChange}></Form.Control></Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Y  =  <Form.Control name = "fx" type="text" onChange = {this.handleText}></Form.Control></Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <Button  onClick={this.handleConfirm}>confirm</Button> 
                    </Col>
                  </Row>
              </Form>
            </Card.Body>
          </Card>
    )
  }
>>>>>>> 6ae8efdabecc05febb772ff2fded32c45fe93ec1
}

export default InputCard;
