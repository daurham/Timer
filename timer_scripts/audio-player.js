let play;
let load;
let OS;

const isWSL = (obj) => {
  let result = false;
  Object.keys(obj).forEach(key => key.indexOf('WSL') >= 0 ? result = true : null);
  return result;
};

const getAudioOS = () => {
  if (process.platform === 'linux') { // Linux & WSL audio
    if (isWSL(process.env)) {
      OS = 'win32';
      play = require('play-sound')(); // https://www.npmjs.com/package/play-sound
      play.OS = OS;
    } else {
      console.log('I am Linux')
      play = require('audio-play'); // https://www.npmjs.com/package/audio-play
      load = require('audio-loader'); // https://www.npmjs.com/package/audio-loader
    }
  } else if (process.platform === 'win32') { // Windows audio
    OS = 'win32';
    play = require('play-sound')(); // https://www.npmjs.com/package/play-sound
    play.OS = OS;
  } else if (process.platform === 'darwin') { // MacOS audio -Untested-
    OS = 'darwin';
    play = require('play-sound')(); // https://www.npmjs.com/package/play-sound
    play.OS = OS;
  }
};

getAudioOS();

if (OS === 'linux') module.exports = { load, play, OS };
if (OS !== 'linux') module.exports = play;
