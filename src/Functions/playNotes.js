import {piano} from "./pianoDictionary";
import { Howl, Howler } from 'howler';
import { wait } from "@testing-library/react";
const delay = require('delay');

export const  GetInput = async(info,updateGraph,speed) =>{
    let i = 0, j = 4;
    while( i < info[0].length){

        let valuesToGraph = [];

        //add values that will be sent to graph
        for(let l = i; l <= j && l < info.length;l++){
            
            let temp = [];

            for(let k = l; k < info[l].length;k++){
                temp.push(info[l][k])
            }

            valuesToGraph.push(temp);

        }
        console.log(valuesToGraph);

        //play notes
        let note = [];
        for(let  k = 0; k < info.length; k++){
            if( i < info[k].length){
                note[k] = (piano[ info[k][i] ]);
            }
      
        }
        console.log(note);
        if(note.length > 0){
            note.forEach(x => {
                
            let toPlay= new Howl({
                    src: [x],
                    volume : 1
            }); 
            toPlay.play();
            });
            
        }

        updateGraph(valuesToGraph,i,j);
        await delay(speed);

        i++;
        j++;
    }
}

let waitForNote = async() =>{
    await delay(1000);
}