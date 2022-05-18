const getTotalSeconds = require('./util').getTotalSeconds;
const run_Timer = require('./util').App;

let time = process.argv[2] || null;
let type =  require('./util').getType(process.argv[3]);
let increment = require('./util').getIncrement(process.argv[4]);
let show = require('./util').showLocalTime((process.argv[5]));
let color = require('./util').getColor(process.argv[6]);
//////////^ignore^///////////


// Only edit these 6 rows:
const USER_SETTINGS = {
    // How long do you want to countdown?
  timerDuration: time || 10,
    // seconds, minutes, hours or days
  durationType: type || 'minutes',
    // Filename.mp3, Filename.wav or null // [startingSound, endingSound]
  audioFile: ['AllRight.. Run it.mp3', 'stop-it-now-movie-vocal.wav'],
    // Log every n second increments
  increment: increment || 1,
    // Color of font
  fontColor: color || 'red',
    // Log current time?
  showLocalTime: show || false
};


// run_Timer(audioFile, totalSecconds, [consoleLogInterval?], [fontColor?], [showLocalTime?]);
run_Timer(USER_SETTINGS.audioFile, getTotalSeconds(USER_SETTINGS), USER_SETTINGS.increment, USER_SETTINGS.fontColor, USER_SETTINGS.showLocalTime);