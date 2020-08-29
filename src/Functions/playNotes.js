import {piano} from "./pianoDictionary";
import { Howl, Howler } from 'howler';

export const GetInput = () =>{
    play = () =>{
        let temp = [0.5,2,3,5]
        for( let i = 0; i < temp.length; i++){
            const Sounds = new Howl({
              src: [piano[temp[i]]]
            })
            Sounds.play()
            console.log("sound")
          
        }
    }
}
