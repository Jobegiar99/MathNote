import {piano} from "./pianoDictionary";
import { Howl, Howler } from 'howler';
import { wait } from "@testing-library/react";
const delay = require('delay');

export const  GetInput = async(info,updateGraph,speed,minI,maxI,changePlaying) =>{

    let i = 0, j = 4;
    let a = minI, b = maxI;
    while( i < info[0].length){

        let valuesToGraph = []
        for(let k = 0; k <info.length;k++){
            let temp = info[k].slice(i,j + 1);
            valuesToGraph[k] = temp;
        }

        //add values that will be sent to graph
    
        console.log(valuesToGraph)
        if(valuesToGraph) updateGraph(valuesToGraph,a,b);

        //play notes
        let note = [];
        for(let  k = 0; k < info.length; k++){
            if( i < info[k].length){
                note[k] = (piano[ info[k][i] ]);
            }

        }
        let toPlay = null;
        let toStop = null;
        if(note.length > 0){
            note.forEach(x => {

            toPlay= new Howl({
                    src: [x],
                    volume : 1
            }); 
            toPlay.play();
            });
        }
        i++;
        j++;
        a++;
        b++;
        await delay(speed);
       
    }
    changePlaying();
}

