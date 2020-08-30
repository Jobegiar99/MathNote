import React,{Component} from "react"
import {GetInput} from "../../Functions/playNotes";
import {MakeMatrix} from "../../Functions/matrix";
import InputCard from "./InputCard";
import Graph from "./Graph"
import { Howl, Howler } from 'howler'; 
import {Container, Row, Col, Button, Form, Alert, Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
            playing : true
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

    play = () =>{
        
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
            GetInput(MakeMatrix(song) , this.updateGraph, speed,minI,maxI, this.state.playing, this.updatePlaying);
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
                    <Col xs="12" md="6">
                        <Alert variant="info">If you want to cancel a function type Y = -50</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <Row>
                            <Col xs="12">{this.state.inputCards}</Col>
                        </Row>
                        <Row>
                            <Col xs="12" md="6">
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
                    
                    <Button onClick = {this.play}>Play</Button>
                    </Col>
                    <Col xs="12" md="6">
                            <Graph

                                data = {this.state.data}
                                minI = {this.state.minI}
                                maxI = {this.state.maxI}

                                />
                    </Col>
                </Row>
            </Container>
             
        )
    }
}

export default MainMenu;

/*
<Container fluid>
                
                <Row>
                    <Col xs="12" md="4">
                    <Alert variant="info">If you want to cancel a function type Y = -50</Alert>
                    </Col>
                </Row>
                <Row>

                    <Col xs="12" md="4">
                    
                        {this.state.inputCards}
                    </Col>
                    <Col xs="12" md="8">
                    <Graph

                    data = {this.state.data}
                    minI = {this.state.minI}
                    maxI = {this.state.maxI}
                
                    />
                    
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
                
                <Button onClick = {this.play}>Play</Button>
            </Container>
*/