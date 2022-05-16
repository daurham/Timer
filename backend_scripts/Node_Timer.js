const getTotalSeconds = require('./util').getTotalSeconds;
const run_Timer = require('./util').App;

let time = process.argv[2] || null;
let type =  require('./util').getType(process.argv[3]) || null;
let increment = require('./util').getIncrement(process.argv[4]) || null;
let show = require('./util').getShow((process.argv[5]));
let design = require('./util').getDesign(process.argv[6]) || null;
//////////^ignore^///////////


// Only edit these 6 rows:
const USER_SETTINGS = {  
    // How long do you want to countdown?
  timerDuration: time || 10,                        
    // seconds, minutes, hours or days 
  durationType: type || 'minutes',                 
    // Filename.mp3, Filename.wav or null 
  audioFile: 'stop-it-now-movie-vocal.wav',
    // Log every n second increments
  increment: increment || 1,
    // Log current time?
  showTime: show || false,
    // Color of text
  design: design || 'red' 
}; 


// run_Timer(audioFile, totalSecconds, [consoleLogInterval?], [showLocalTime?], [fontColor?]);
run_Timer(USER_SETTINGS.audioFile, getTotalSeconds(USER_SETTINGS), USER_SETTINGS.increment, USER_SETTINGS.showTime, USER_SETTINGS.design);