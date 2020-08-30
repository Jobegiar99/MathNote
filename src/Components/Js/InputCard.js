import React, {useRef, useState} from 'react'
import Graph from './Graph'
import  { Parser} from 'expr-eval'

export default function InputCard() {
    const xiRef = useRef()
  const xfRef = useRef()
  const fxRef = useRef()
  const stepRef = useRef()
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
      //var aux = []
      for(var i=xi; i<=xf; i+=step){
        console.log(fx)
        console.log("x= ", i, " y= ", expr1.evaluate({x : i}))
        setGpoints(prevGpoints => {
          return [...prevGpoints,{x: expr1.evaluate({x : i}), y: i, xi: xi, xf: xf, step: step}]
        })
        //console.log(gPoints.values())
      }
    }
  }
  
  return (
    <>
      <form>
        <label>Y  =  <input ref = {fxRef} type="Text" ></input></label>
        <br></br>
        <label>Xi= <input ref = {xiRef} type="Number" style={{width:40}}></input></label>
        <label> Xf = <input ref = {xfRef} type="Number" style={{width:40}}></input></label>
        <label> step = <input ref = {stepRef} type="Number" style={{width:40}}></input></label>
        
      </form>
      <button onClick={handleXs}>Listo</button>
        <Graph gPoints={gPoints} xf={parseInt(xfRef.value)}/>
      
    </>
  )
}
