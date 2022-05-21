// TODO: figure out what lobs work on WSL and other opperating systems.

let play;
let load;


const getAudioOS = () => {
  if (process.platform === 'linux') { // Linux & WSL audio
    if (isWSL(process.env)) {
      console.log('I am WSL')
      // play =;
      // load =;
    } else {
      console.log('I am Linux')
      play = require('audio-play'); // https://www.npmjs.com/package/audio-play
      load = require('audio-loader'); // https://www.npmjs.com/package/audio-loader
    }
  }
  if (process.platform === 'win32') { // Windows audio
    console.log('I am Windows')
    // play = require('audio-play'); // https://www.npmjs.com/package/audio-play
    // load = require('audio-loader'); // https://www.npmjs.com/package/audio-loader
  }
  if (process.platform === 'darwin') { // MacOS audio -Untested-
    console.log('I am MacOS')
    // play = require('audio-play'); // https://www.npmjs.com/package/audio-play
    // load = require('audio-loader'); // https://www.npmjs.com/package/audio-loader
  }
}

const isWSL = (obj) => {
  let result = false;
  Object.keys(obj).forEach(key => key.indexOf('WSL') >= 0 ? result = true : null);
  return result;
}

getAudioOS();

module.exports = { load, play };
