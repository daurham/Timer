# Terminal Timer ⏲
A simple timer that runs in the terminal. Made with time boxing in mind, but can be used for anything. With sound capabilities, we can import a custom starting and ending sound of our choice to go off along side the timer.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/nodemon-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/nodemon-6DA55F?style=for-the-badge&logo=nodemon)

![](https://media.giphy.com/media/ptAFyxqzfSBs28tDS4/giphy.gif)
![](https://media.giphy.com/media/sfiiPmUuRtPTvs7WeY/giphy.gif)


## Installing Terminal Timer
1. Place the audiofile you wish to play when the countdown hits 0, inside the assets folder ( .wav or .mp3 ).
2. Open Terminal_Timer.js and fill out the USER_SETTINGS (optional)
3. run:
```
npm i
npm start
```
4. Get to work!!
---
## Utility Setup (Recommended)
_Get the best use out of it, use easily in terminal wherever_
_FOR BASH TERMINAL USERS_

---
### Option a).
1. Clone repo to your command lines initial direction
2. Open a fresh terminal
3. run:
```
node timer_scripts/Terminal_Timer.js 10 minutes
```
syntax: node [path/]fileName.js [time] [timeType] [increment?] [fontDesign?] [showLocalTime?]
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
        - (node backend_scripts/Terminal_Timer.js)
``` bash
alias timer='cd; cd Desktop/Practice/timerApp; node timer_scripts/Terminal_Timer.js'
```

>alias aliasName='[go to initial terminal dir; go to repo dir root; use node to run backend_scripts/Terminal_Timer.js]'

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

![](https://media.giphy.com/media/7x7vp9yPVEnZGXWlzv/giphy.gif)
![](https://media.giphy.com/media/nQAyLJXzeBaANxfyJa/giphy.gif)
![](https://media.giphy.com/media/t0Ob0tLiWa6cHCHPCU/giphy.gif)
![](https://media.giphy.com/media/KNNTUcZln6PLh5ntC7/giphy.gif)


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
2. In "Terminal_Timer.js", on line 20 replace your initial and/or ending sound file with the current string in its place.
3. As long as both new audio files are either _.mp3_ or _.wav_, you should be good to go!



---
- Created By Jake Daurham
## Contact Info
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daurham) [![Instagram](https://img.shields.io/badge/Captain_Daurham-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/captain_daurham/) [![Twitter](https://img.shields.io/badge/daurham-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/daurham) [![YouTube](https://img.shields.io/badge/daurham-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/user/daurham) ![Gmail](https://img.shields.io/badge/Daurham95-D14836?style=for-the-badge&logo=gmail&logoColor=white)
