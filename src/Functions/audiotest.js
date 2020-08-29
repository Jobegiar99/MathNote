var audioManager = require('audio-manager');
var channels = ['music'];
var am = new audioManager(channels);

export const playAudio = () =>{
    
    am.settings.audioPath = 'src\\media\\audio\\piano';
    am.setVolume('music',100);
    am.playSound('music','C3vL',0.7,0.1);
    console.log('gi');

}