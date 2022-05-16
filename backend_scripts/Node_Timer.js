const getTotalSeconds = require('./util').getTotalSeconds;
const run_Timer = require('./util').App;

const USER_SETTINGS = {  
    // How long do you want to countdown?
  timerDuration: 11,                        
    // seconds, minutes, hours or days 
  durationType: 'minutes',                 
    // filename.mp3, filename.wav or null 
  audioFile: 'stop-it-now-movie-vocal.wav' 
}; 

// run_Timer(audioFile, totalSecconds [,consoleLogInterval = defaults on 1sec]);
run_Timer(USER_SETTINGS.audioFile, getTotalSeconds(USER_SETTINGS));