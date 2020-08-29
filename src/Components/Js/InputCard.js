import React, {useRef, useState} from 'react'
import Graph from './Graph'
import { Expression, Equation, parse } from 'algebra.js' 

export default function InputCard() {
    const xiRef = useRef()
  const xfRef = useRef()
  const fxRef = useRef()

  const [gPoints, setGpoints] = useState([])
  var expr = new Expression("y")
  

  

  function handleXs(){
    const xi = parseInt(xiRef.current.value)
    const xf = parseInt(xfRef.current.value) 
    const fx= fxRef.current.value
    if (xi === '' || xf === '' || fx === '') return
    else{
      var nEx= new parse(fx)
      xiRef.current.value = ''
      xfRef.current.value = ''
      for(var x=xi; x<=xf; x++){
        console.log(x)
        var eq = new Equation (nEx,x)
        console.log("x= ",eq.solveFor("x").toString(), " y= ",x)
        setGpoints(prevGpoints => {
          return [...prevGpoints,{x: eq.solveFor("x").numer, y: x}]
        })
        
      }
      nEx.value=''
    }
  }
  
  return (
    <>
      <form>
        <label>Y  =  <input ref = {fxRef} type="Text" ></input></label>
        <br></br>
        <label>Xi= <input ref = {xiRef} type="Number" style={{width:40}}></input></label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label>Xf = <input ref = {xfRef} type="Number" style={{width:40}}></input></label>
        
      </form>
      <button onClick={handleXs}>Listo</button>
        <h1>{gPoints.x}   {gPoints.y}</h1>
        <Graph gPoints={gPoints} xf={parseInt(xfRef.value)}/>
      
    </>
  )
}
