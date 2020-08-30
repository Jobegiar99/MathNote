import React,{Component} from "react"
import {GetInput} from "../../Functions/playNotes";
import {MakeMatrix} from "../../Functions/matrix";
import InputCard from "./InputCard";
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
            idControl : 2
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


    play = () =>{
        let song = []
        let speed = this.state.speed;

        if(speed < 0){
            speed = 1000;
        }
        
        for(let i = 0, j =0; i < this.state.song.length; i++){
            if(this.state.song[i][0].length > 0){
                song[j] = this.state.song[i];
                j++;
            }
        }
        console.log(song, "HI")
        GetInput(MakeMatrix(song) , null, speed);
    }

    render(){
        return(
            <div>
                If you want to cancel a function type Y = -50
                <div>
                    {this.state.inputCards}
                </div>
                <button onClick = {this.handleAdd}>Add another function</button><br></br>
                <label>Song speed. 1000 = 1 second</label><br></br>
                <input name = "speed" type = "number" min = {1} onChange = {this.handleChange}></input>
                <br></br>
                <button onClick = {this.play}>Play</button>
            </div>
        )
    }
}

export default MainMenu;