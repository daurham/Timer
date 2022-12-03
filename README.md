<div align="center">

# Terminal Timer ⏲



A simple timer that runs in the terminal. Made with time boxing in mind, but can be used for anything. With sound capabilities, we can import a custom starting and ending sound of our choice to go off along side the timer.


![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/nodemon-8AA15A?style=for-the-badge&logo=nodemon&logoColor=gray)
![Bash](https://img.shields.io/badge/bash-gray?style=for-the-badge&logo=gnubash&logoColor=white)

![](https://media.giphy.com/media/ptAFyxqzfSBs28tDS4/giphy.gif)
![](https://media.giphy.com/media/n5HeyjISjmh8Znzi2j/giphy.gif)

</div>
## Installing Terminal Timer
(Utility Set up is recommended to get the most out of this application)

1. Clone this repo 
2. Open Terminal_Timer.js and fill out the USER_SETTINGS (optional)
3. Install dependencies:
```
npm install
```
4. Start timer:
```
npm start
```
4. Get to work!!
---
## Utility Set up (Recommended)
_Get the best use out of it, use easily in terminal wherever_

---
### Option a).
#### _Quick but ineffecient_

1. Clone repo to your command lines initial directory
2. Install dependencies
```
npm install
```
3. Open a fresh terminal
4. Run:
```
node timer_scripts/Terminal_Timer.js 10 minutes
```
>syntax: node [path/to/repo?/]timer_scripts/Terminal_Timer.js [timeDuration?] [timeType?] [timeIncrement?] [fontColor?] [showLocalTime?]


---
### Option b).
#### _RECOMMENDED but only for bash terminal users_

1. Clone repo wherever you want
2. Install dependencies
```
npm install
```
3. Create an alias at the bottom of your bash startup script (.bashrc or .bash_profile) that:
    - a). resets the current directory
        - (cd;)
    - b). travels to the repo's root directory and
        - (cd path/to/repo;)
    - c). uses node to run the script from root
        - (node backend_scripts/Terminal_Timer.js)
``` bash
alias timer='cd; cd Desktop/Applications/Timer; node timer_scripts/Terminal_Timer.js'
```

>alias aliasName='[go to initial terminal dir; go to repo dir root; use node to run backend_scripts/Terminal_Timer.js]'

4. Launch a fresh terminal
5. Run a similar syntax:
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
>syntax: aliasName [timeDuration?] [timeType?] [timeIncrement?] [fontColor?] [showLocalTime?]

> Running the "aliasName" defaults to:

```
aliasName 10 minutes 1 red false
```
5. Get to work!!

![](https://media.giphy.com/media/7x7vp9yPVEnZGXWlzv/giphy.gif)
![](https://media.giphy.com/media/nQAyLJXzeBaANxfyJa/giphy.gif)
![](https://media.giphy.com/media/t0Ob0tLiWa6cHCHPCU/giphy.gif)
![](https://media.giphy.com/media/KNNTUcZln6PLh5ntC7/giphy.gif)

---
## Playing your own your own sound:

1. Import audio files into the "assets" directory
2. In "Terminal_Timer.js", on line 20 type in your initial and/or ending audio filename in ['the', 'array'], replacing the 2 other filenames
3. As long as both new audio files are either _.mp3_ or _.wav_, you should be good to go!

### OS AUDIO NOTES:
- Linux: _.mp3_ files may be buggy, _.wav_ work perfect
- Mac: _.mp3_ files may be buggy, _.wav_ work perfect (Need more feedback)
- Windows: Untested (Need more feedback)
- WSL: I was unable to connect to my Win audio hardware from WSL


---
- Created By Jake Daurham
## Contact Info
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daurham) [![Instagram](https://img.shields.io/badge/Captain_Daurham-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/captain_daurham/) [![Twitter](https://img.shields.io/badge/daurham-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/daurham) [![YouTube](https://img.shields.io/badge/daurham-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)](https://www.youtube.com/user/daurham) ![Gmail](https://img.shields.io/badge/Daurham95-D14836?style=for-the-badge&logo=gmail&logoColor=white)
