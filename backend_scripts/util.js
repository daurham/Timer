const audio = require('./audio-player');
const dateTime = require('@js-temporal/polyfill');

let localTime = () => dateTime.Temporal.Now.plainTimeISO().toLocaleString();

const getTimeRemaining = (totalSec) => {
  if (totalSec < 60 && totalSec > 9) return `00:${totalSec} | @`;
  if (totalSec < 10) return `00:0${totalSec} | @`;
  let totalMin = Math.floor(totalSec / 60);
  let totalHr = Math.floor(totalMin / 60);
  let totalDay = Math.floor(totalHr / 24);
  let currentSec = Math.floor(totalSec % 60);
  let currentMin = totalMin > 60 ? Math.floor(totalMin % 60) : totalMin;
  let currentHr = totalHr > 24 ? Math.floor(totalHr % 24) : totalHr;
  let currentDay = totalDay > 0 ? Math.floor(totalDay) : false;
  if (currentSec < 10) currentSec = `0${currentSec}`;
  if (currentMin < 10) currentMin = `0${currentMin}`;
  if (currentDay) return `${currentDay}:${currentHr}:${currentMin}:${currentSec} | @`;
  return `${currentHr}:${currentMin}:${currentSec} | @`;
};

const getTotalSeconds = (settings) => { 
  console.log(settings)
  if (settings.durationType === 'seconds') return settings.timerDuration;
  if (settings.durationType === 'minutes') return settings.timerDuration * 60;
  if (settings.durationType === 'hours') return settings.timerDuration * 60 * 60;
  if (settings.durationType === 'days') return settings.timerDuration * 60 * 60 * 24;
};

const App = (audioFile, sec, increments = 1) => {
  let alarm;
  if (audioFile) alarm = audio.load(`./assets/${audioFile}`);
  let intervalObj = setInterval(() => {
    sec -= 1;
    if (sec % increments === 0) console.log('Remaining Time:', getTimeRemaining(sec), localTime());
    if (sec <= 0) {
      console.log(`Times up!`);
      clearInterval(intervalObj);
      if (audioFile) alarm.then(audio.play);
    }
  }, 1000);
};

module.exports = { App, getTotalSeconds };