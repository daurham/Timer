# TimerApp

## Node Timer
1. Place the audiofile you wish to play when the countdown hits 0, inside the assets folder ( .wav or .mp3 ).
2. Open Node_Timer.js and fill out the USER_SETTINGS (optional)
3. run:
```
npm i
npm start
```
4. Get to work!!
---
## Utility Setup (Recommended)
_Get the best use out of it, use easily in terminal wherever_

---
### Option a).
1. Clone repo to your command lines initial direction
2. Open a fresh terminal
3. run:
```
node timer_scripts/Node_Timer.js 10 minutes
```
syntax: node__[path/]fileName.js [time] [timeType] [increment?] [fontDesign?] [showLocalTime?]
>valid timeTypes: _seconds sec s, minutes min m, hours hr h, days dy d_


---
### Option b).
_Create an alias in your .bashrc or .bash_profile file, found in the terminal's default directory_
1. Clone repo wherever you want.
2. Edit your .bashrc, .bash_profile or alike file (commonly located in a new terminals initial direcory) using vim, nano or vsCode
2. Add an alias at the bottom that:
    - resets the current directory,
        - (cd;)
    - travels to the repo's root directory and
        - (cd path/to/repo;)
    - uses node to run the script:
        - (node backend_scripts/Node_Timer.js)
``` bash
alias timer='cd; cd Desktop/Practice/timerApp; node timer_scripts/Node_Timer.js'
```

>alias aliasName='[go to initial terminal dir; go to repo dir root; use node to run backend_scripts/Node_Timer.js]'

4. Launch new terminal
5. Run in a similar syntax:
```
timer 1 hr
```
```
timer 30 sec 2
```
```
timer 10
```
```
timer 5 m 1 green true
```
>syntax: aliasName [timeDuration] [timeType] [timeIncrements] [fontColor] [showLocalTime?]

![]()

> Running "aliasName" defaults on:

```
aliasName 10 minutes 1 red false
```
5. Get to work!!

---
## Importing your own Sound:
- If you're running on Linux or Mac, the sound should work.
    - Note: Sound is untested on Windows.
    - Only WSL tested and it doesn't work there yet. (Cannot connect to Win Audio hardware from WSL)

1. Simply import your audio files to the "assets" directory.
2. In "Node_Timer.js", on line 20 replace your initial and/or ending sound file with the current string in its place.
3. As long as both new audio files are either _.mp3_ or _.wav_, you should be good to go!