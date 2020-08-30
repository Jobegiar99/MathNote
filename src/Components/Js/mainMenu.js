import React,{Component} from "react"
import {GetInput} from "../../Functions/playNotes";
import {MakeMatrix} from "../../Functions/matrix";
import InputCard from "./InputCard";
import Graph from "./Graph"
import { Howl, Howler } from 'howler'; 
import {Container, Row, Col, Button, Form, Alert, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/mainMenu.css';

class MainMenu extends React.Component{

    constructor(){
        super();
        this.state = {
            speed: 1000,
            song : [],
            inputCards :[
                <InputCard               
                    updateSong = {this.updateSong}
                    index = {0}             
                />
            ],
            idControl : 2,
            data : [],
            minI : -25,
            maxI : 25,
            playing : {visibility : 'visible'}
        };
    }

    updateSong = (values, start,end,step,index) =>{
        let temp = this.state.song;
        temp[ index ] = [ values,start,end,step];
        this.setState({song:temp });
        console.log(this.state.song);
    }

    handleChange = (evt) =>{

        this.setState({speed : evt.target.value});

    }

    handleAdd = () =>{
        let temp = this.state.inputCards;
        temp[temp.length] = <InputCard
        updateSong = {this.updateSong}
        index = {temp.length}
        />
        this.setState({inputCards: temp});
    }

    updateGraph = (gData,minIn,maxIn) =>{
        let info = []
        for(let i = 0; i < gData.length;i++){
            let temp = [];
            for( let j = 0, k = minIn; j < gData[i].length;j++, k++){
                temp[j] = {x : k, y : gData[i][j]}
            }
            info[i] = temp
        }

        this.setState({data : info, minI: minIn, maxI: maxIn})

    }

    changePlaying = () =>{
        if(this.state.playing = {visibility: 'visible'}){
            this.setState({playing: {visibility: 'hidden'}});
        }else{
            this.setState({playing:{visibility:'visible'}});
        }
    }

    play = () =>{
        this.changePlaying();
        let song = [];
        let speed = this.state.speed;
        let maxI= Number.MIN_SAFE_INTEGER , minI = Number.MAX_SAFE_INTEGER;
        if(speed < 0){
            speed = 1000;
        }
        
        for(let i = 0, j =0; i < this.state.song.length; i++){
            if(this.state.song[i][0].length > 0){
                song[j] = this.state.song[i];
                j++;
            }
        }

        for(let i = 0; i < song.length;i++){

            if(song[i][1] < minI) minI = song[i][1];

            if(song[i][2] > maxI) maxI = song[i][2];
        }

        this.setState({minI : this.state.minI + 1});

        if(song.length > 0)
            GetInput(MakeMatrix(song) , this.updateGraph, speed,minI,maxI,this.changePlaying);
        else alert("Add a function first!");
    }

    render(){
        return(
            /*<div>
                If you want to cancel a function type Y = -50
                <div>
                    {this.state.inputCards}
                </div>
                <button onClick = {this.handleAdd}>Add another function</button><br></br>
                <label>Song speed. 1000 = 1 second</label><br></br>
                <input name = "speed" type = "number" min = {1} onChange = {this.handleChange}></input>
                <br></br>
                <button onClick = {this.play} >Play</button>
                <Graph

                    data = {this.state.data}
                    minI = {this.state.minI}
                    maxI = {this.state.maxI}
                
                />
            </div>*/
            
            <Container fluid>
                
                <Row>
                    <Col xs="12" md="4">
                    <Alert variant="info">If you want to cancel a function type Y = -50</Alert>
                    </Col>
                </Row>
                <Row>
                    
                    <Col xs="12" md="4" id = "inputCard" >
                        {this.state.inputCards}
                    </Col>
                    
                    <Col xs="12" md="4">
                    <Graph

                    data = {this.state.data}
                    minI = {this.state.minI}
                    maxI = {this.state.maxI}
                
                    />
                    
                    </Col>
                    <Col xs = "12" md = "4" id = "noteInfo"> 
                    <Col>-19.5 : A0</Col> 
                    <Col>-19 : Bb0</Col>
                    <Col>-18.5 : B0</Col>                 
                    <Col>-18 : C1</Col>
                    <Col>-17.5 : Db1</Col>
                    <Col>-17.0 : D1</Col>
                    <Col>-16.5 : Eb1</Col>
                    <Col>-16.0 : E1</Col>
                    <Col>-15.5 : F1</Col>
                    <Col>-15.0 : Gb1</Col>
                    <Col>-14.5 : G1</Col>
                    <Col>-14.0 : Ab1</Col>
                    <Col>-13.5 : A1</Col>
                    <Col>-13.0 : Bb1</Col>
                    <Col>-12.5 : B1</Col>
                    <Col>-12.0 : C2</Col>
                    <Col>-11.5 : Db2</Col>
                    <Col>-11.0 : D2</Col>
                    <Col>-10.5 : Eb2</Col>
                    <Col>-10.0 : E2</Col>
                    <Col>-9.5 : F2</Col>
                    <Col>-9.0 : Gb2</Col>
                    <Col>-8.5 : G2</Col>
                    <Col>-8.0 : Ab2</Col>
                    <Col>-7.5 : A2</Col>
                    <Col>-7.0 : Bb2</Col>
                    <Col>-6.5 : B2</Col>
                    <Col>-6.0 : C3</Col>
                    <Col>-5.5 : Db3</Col>
                    <Col>-5.0 : D3</Col>
                    <Col>-4.5 : Eb3</Col>
                    <Col>-4.0 : E3</Col>
                    <Col>-3.5 : F3</Col>
                    <Col>-3.0 : Gb3</Col>
                    <Col>-2.5 : G3</Col>
                    <Col>-2.0 : Ab3</Col>
                    <Col>-1.5 : A3</Col>
                    <Col>-1.0 : Bb3</Col>
                    <Col>-0.5 : B3</Col>
                    <Col>0.0 : C4</Col>
                    <Col>0.5 : Db4</Col>
                    <Col>1.0 : D4</Col>
                    <Col>1.5 : Eb4</Col>
                    <Col>2.0 : E4</Col>
                    <Col>2.5 : F4</Col>
                    <Col>3.0 : Gb4</Col>
                    <Col>3.5 : G4</Col>
                    <Col>4.0 : Ab4</Col>
                    <Col>4.5 : A4</Col>
                    <Col>5.0 : Bb4</Col>
                    <Col>5.5 : B4</Col>
                    <Col>6.0 : C5</Col>
                    <Col>6.5 : Db5</Col>
                    <Col>7.0 : D5</Col>
                    <Col>7.5 : Eb5</Col>
                    <Col>8.0 : E5</Col>
                    <Col>8.5 : F5</Col>
                    <Col>9.0 : Gb5</Col>
                    <Col>9.5 : G5</Col>
                    <Col>10.0 : Ab5</Col>
                    <Col>10.5 : A5</Col>
                    <Col>11.0 : Bb5</Col>
                    <Col>11.5 : B5</Col>
                    <Col>12.0 : C6</Col>
                    <Col>12.5 : Db6</Col>
                    <Col>13.0 : D6</Col>
                    <Col>13.5 : Eb6</Col>
                    <Col>14.0 : E6</Col>
                    <Col>14.5 : F6</Col>
                    <Col>15.0 : Gb6</Col>
                    <Col>15.5 : G6</Col>
                    <Col>16.0 : Ab6</Col>
                    <Col>16.5 : A6</Col>
                    <Col>17.0 : Bb6</Col>
                    <Col>17.5 : B6</Col>
                    <Col>18.0 : C7</Col>
                    <Col>18.5 : Db7</Col>
                    <Col>19.0 : D7</Col>
                    <Col>19.5 : Eb7</Col>
                    <Col>20.0 : E7</Col>
                    <Col>20.5 : F7</Col>
                    <Col>21.0 : Gb7</Col>
                    <Col>21.5 : G7</Col>
                    <Col>22.0 : Ab7</Col>
                    <Col>22.5 : A7</Col>
                    <Col>23.0 : Bb7</Col>
                    <Col>23.5 : B7</Col>  
                    </Col>
                </Row>
                
                <Row>
                    <Col xs="12" md="4">
                    
                        <Button onClick = {this.handleAdd}>Add another function</Button><br></br>
                    </Col>
                    
                </Row>
                <Form>
                    <Row>
                        <Col xs="12" md="4">
                            <Form.Label>Song speed. 1000 = 1 second</Form.Label><br></br>
                            <Form.Control placeholder = "speed" type = "number" min = {1} onChange = {this.handleChange}></Form.Control>
                            <br></br>
                        </Col>
                    </Row>
                </Form>
            
                <Button onClick = {this.play} style = {this.state.playing}>Play</Button>
            </Container> 
        )
    }
}

export default MainMenu;