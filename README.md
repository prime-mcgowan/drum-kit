## Drum Kit Web App

## Description

The Drum Kit app is a simple web application that allows users to hit specific keys on their keyboard and hear the 
sounds associated with the letter.

## Technologies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## Features
- Interactive Buttons: The "buttons" have an assigned letter which is attached to a sound...the user can hear the sound by pressing the specific letters on their keyboard
- Responsive Design: The app is designed to be responsive, ensuring a user-friendly experience on both desktop and mobile devices.

## How to Use
1. Open the web application in your preferred web browser.
2. Press letters: A, S, D, F, G, H, J, K and/or L to hear the sounds
   

## Implementation Details
The Drum Kit Web App is implemented using HTML, JavaScript, and CSS for styling.

The app consists of two main functions:

- playSound: When a key is pressed the playSound(e) function is run. The correct key and audio is selected by using a querySelector
             and grabbing the specific key and audio using an assigned key-code. The sound is also rewound quickly so a user can
             click the sound in quick succession by adding .currentTime = 0 to audio. The 'playing' style is added to the letter box
             by putting a .classList.add("playing") on key.
- removeTransiition: This function looks for a propertyName that is equal to "transform" when a key is clicked...and the end of the
             transform time the "playing" styles are removed. This function is triggered when a key is pressed because an eventListener
             was attached to each individual key. 

## Usage

To use this web application, simply open the index.html file in a web browser. 
Use your keyboard to click on the letter and hear the sounds!!
