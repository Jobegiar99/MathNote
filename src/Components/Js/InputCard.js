import React, {useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Graph from './Graph'
import  { Parser} from 'expr-eval'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function InputCard() {
    const xiRef = useRef()
  const xfRef = useRef()
  const fxRef = useRef()
  const stepRef = useRef()
  var equis = 0
  const [gPoints, setGpoints] = useState([])
  
  
 
  

  function handleXs(){
    let xi = parseInt(xiRef.current.value)
    let xf = parseInt(xfRef.current.value) 
    const step = parseInt(stepRef.current.value)
    const fx= fxRef.current.value
    
    
    if (xi === '' || xf === '' || fx === '' || stepRef === '') return
    else{
      xi = ((xi < xf) ? xi : xf) 
      xiRef.current.value = ''
      xfRef.current.value = ''
      stepRef.current.value = ''
      fxRef.current.value = ''
      var parser= new Parser()
      var expr1 = parser.parse(fx)
      var aux = []
      var aux1
      for(var i=xi; i<=xf; i+=step){
        //console.log(fx)
        console.log("x= ", i, " y= ", expr1.evaluate({x : i}))
        aux1 = parseInt(expr1.evaluate({x : i}))
        aux.push(aux1)
        //console.log(gPoints.values())
      }
      setGpoints(prevGpoints => {
        return [...prevGpoints,{x: aux, xi: xi, xf: xf, step: step}]
      })
    }
  }
  
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
}
