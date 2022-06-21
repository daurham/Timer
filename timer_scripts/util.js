const audio = require('./audio-player');
const dateTime = require('@js-temporal/polyfill');
const chalk = require('chalk');

const localTime = () => dateTime.Temporal.Now.plainTimeISO().toLocaleString();
let alarmSound;

const getTimeRemaining = (totalSec) => {
  if (totalSec < 60 && totalSec > 9) return `00:${totalSec}`;
  if (totalSec < 10) return `00:0${totalSec}`;
  let totalMin = Math.floor(totalSec / 60);
  let totalHr = Math.floor(totalMin / 60);
  let totalDay = Math.floor(totalHr / 24);
  let currentSec = Math.floor(totalSec % 60);
  // console.log(totalSec, currentSec, totalMin, totalHr, totalDay); // Testing
  let currentMin = totalMin > 60 ? Math.floor(totalMin % 60) : totalMin;
  let currentHr = totalHr >= 24 ? Math.floor(totalHr % 24) : totalHr;
  let currentDay = totalDay > 0 ? Math.floor(totalDay) : false;
  if (currentSec < 10) currentSec = `0${currentSec}`;
  if (currentMin < 10) currentMin = `0${currentMin}`;
  if (currentHr === 0 && currentDay) return `${currentDay}:0${currentHr}:${currentMin}:${currentSec}`;
  if (currentHr === 0 && !currentDay) return `${currentMin}:${currentSec}`;
  if (currentDay && currentHr >= 10) return `${currentDay}:${currentHr}:${currentMin}:${currentSec}`;
  if (currentDay && currentHr < 10) return `${currentDay}:0${currentHr}:${currentMin}:${currentSec}`;
  return `${currentHr}:${currentMin}:${currentSec}`;
};

const getTotalSeconds = (settings) => {
  console.log(chalk.underline(`User Settings:\n`), settings, '\n_______________'); // Initially logs the USER_SETTINGS
  if (settings.durationType === 'seconds') return settings.timerDuration;
  if (settings.durationType === 'minutes') return settings.timerDuration * 60;
  if (settings.durationType === 'hours') return settings.timerDuration * 60 * 60;
  if (settings.durationType === 'days') return settings.timerDuration * 60 * 60 * 24;
};

const getType = (val) => {
  val = String(val).toLowerCase();
  if (val === 's' || val === 'sec' || val === 'second' || val === 'seconds') return 'seconds';
  if (val === 'm' || val === 'min' || val === 'minute' || val === 'minutes') return 'minutes';
  if (val === 'h' || val === 'hr' || val === 'hour' || val === 'hours') return 'hours';
  if (val === 'd' || val === 'dy' || val === 'day' || val === 'days') return 'days';
  return null;
};

const getIncrement = (val) => {
  if (val > 0) return val;
  return null;
};

const showLocalTime = (val) => {
  if (String(val).slice(0, 1) === 't') return true;
  return false;
};

const getColor = (val) => val || null; // add new functionality later to handle range of inputs

const playSound = async (audioFile, initial = false) => {
  if (initial) {
    if (audioFile[0] && audio.OS === 'linux') audio.load(`./assets/${audioFile[0]}`).then(buffer => audio.play(buffer)); // load and play startup sound // linux
    if (audio.OS === 'win32') audio.play('assets/' + audioFile[0]); // play startup sound // windows
    if (audio.OS === 'darwin') audio.play('assets/' + audioFile[0]); // play startup sound // mac
  } else {
    if (audioFile[audioFile.length - 1] && audio.OS === 'linux') audio.load(`./assets/${audioFile[audioFile.length - 1]}`).then(buffer => audio.play(buffer)); // load and play alarm sound // linux
    if (audio.OS === 'win32') audio.play('assets/' + audioFile[audioFile.length - 1]); // play alarm sound // windows
    if (audio.OS === 'darwin') audio.play('assets/' + audioFile[audioFile.length - 1]); // play alarm sound // mac
  }
};

const App = (audioFile, sec, increments = 1, color = 'blue', time = false)  => {
  playSound(audioFile, true); // play initial sound
  let intervalObj = setInterval(() => { // begin interval countdown
    sec -= 1;
    if (sec % increments === 0) console.log(chalk[color](`    ${getTimeRemaining(sec)} ${time ? (' ___________________  ' + localTime()) : ''}`));  // check increment to log current time
    if (sec <= 0) { // check if remaining time reached 0
      console.log(chalk.bold(`  Times up!`));
      playSound(audioFile);
      clearInterval(intervalObj);
    }
  }, 1000);
};

module.exports = { App, getTotalSeconds, getType, getIncrement, showLocalTime, getColor };