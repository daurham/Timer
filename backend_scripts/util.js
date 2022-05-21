const audio = require('./audio-player');
const dateTime = require('@js-temporal/polyfill');
const chalk = require('chalk');


let localTime = () => dateTime.Temporal.Now.plainTimeISO().toLocaleString();

const getTimeRemaining = (totalSec) => {
  if (totalSec < 60 && totalSec > 9) return `00:${totalSec}`;
  if (totalSec < 10) return `00:0${totalSec}`;
  let totalMin = Math.floor(totalSec / 60);
  let totalHr = Math.floor(totalMin / 60);
  let totalDay = Math.floor(totalHr / 24);
  let currentSec = Math.floor(totalSec % 60);
  let currentMin = totalMin > 60 ? Math.floor(totalMin % 60) : totalMin;
  let currentHr = totalHr > 24 ? Math.floor(totalHr % 24) : totalHr;
  let currentDay = totalDay > 0 ? Math.floor(totalDay) : false;
  if (currentSec < 10) currentSec = `0${currentSec}`;
  if (currentMin < 10) currentMin = `0${currentMin}`;
  if (currentDay) return `${currentDay}:${currentHr}:${currentMin}:${currentSec}`;
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

const App = (audioFile, sec, increments = 1, color = 'blue', time = false)  => {
  let startupSound;
  let alarmSound;
  if (audioFile[0]) startupSound = audio.load(`./assets/${audioFile[0]}`); // load startup sound
  if (audioFile[1]) alarmSound = audio.load(`./assets/${audioFile[1]}`); // load alarm sound
  if (startupSound) startupSound.then(buffer => audio.play(buffer), {device: 'hw:0,0'}); // play startup sound
  let intervalObj = setInterval(() => {
    sec -= 1;
    if (sec % increments === 0) console.log(chalk[color](`    ${getTimeRemaining(sec)} ${time ? (' ___________________  ' + localTime()) : ''}`));
    if (sec <= 0) {
      console.log(chalk.bold(`  Times up!`));
      clearInterval(intervalObj);
      if (audioFile[1]) alarmSound.then(buffer => audio.play(buffer), {device: 'hw:0,0'}); // play alarm sound
    }
  }, 1000);
};

module.exports = { App, getTotalSeconds, getType, getIncrement, showLocalTime, getColor };