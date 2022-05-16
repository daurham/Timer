# TimerApp

## Node Timer
1. Place the audiofile you wish to play when the countdown hits 0, inside the assets folder ( .wav or .mp3 ).
2. Open Node_Timer.js and fill out the USER_SETTINGS
3. run: 
```
npm i
npm start
```
4. Get to work!!
---
## Utility Setup
_get the best use out of it, use easily in terminal wherever_

---
### Option a).
1. Clone repo to your commandlines initial direction
2. Open a fresh terminal
3. run:
```
node backend_scripts/Node_Timer.js 10 minutes 
``` 
syntax: node__[path/]fileName.js [time] [timeType] [increment?] [showLocalTime?] [fontDesign?]
>valid timeTypes: _seconds sec s, minutes min m, hours hr h, days dy d_


---
### Option b).
_Create an alias in your .bashrc or .profile bash file, found in the terminal's default directory_
1. Go to your .bashrc or alike file
2. add an alias at the bottom:
``` bash
alias timer='cd; cd Desktop/Practice/timerApp; node backend_scripts/Node_Timer.js'
```
3. Launch new terminal
4. run:
```
timer 5 m 1 t green
```
5. Get to work!!