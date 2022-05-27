# TikTok-Youth-Camp-Hangman

## Content

-   [The Team](#the-team)
-   [Short Description](#short-description)
-   [Directory Tree](#directory-tree)
-   [Instructions](#instructions)
-   [Project Report](#project-report)

## The Team

Our team is called < name of team > and consists of:

-   Aster Angelic Leong
-   Varun Teja Bondugula
-   Siew Cheng Nee
-   Daryl Lim Kai Zhi
-   Koh Hui Juan

## Short Description
This hangman game is powered by ReactJS and uses the TailwindCSS framework. It allows the player to guess a word, given a category and 9 failure attempts. The streak score of the player will be calculated.

### Screenshots
Here are some screenshots of the hangman game. The rest of the screenshots can be found [here](doc/screenshots)

### Video
Here is a [video](doc/youtubelink) to show how the game is played.


## Directory Tree
. <br>
├── LICENSE <br>
├── README.md <br>
├── package-lock.json <br>
├── package.json <br>
├── postcss.config.js <br>
├── tailwind.config.js <br>
├── .gitignore <br>
├── public <br>
│   ├── favicon.ico <br>
│   ├── index.html <br>
│   ├── manifest.json <br>
│   ├── robots.txt <br>
│   ├── images <br>
│   ├── ├── asset-\<number\>.png <br>
├── src <br>
│   ├── App.css * main css file <br>
│   ├── App.js * main js file <br>
│   ├── App.test.js <br>
│   ├── Keyboard.css <br>
│   ├── Keyboard.js <br>
│   ├── Phrase.css <br>
│   ├── Phrase.js <br>
│   ├── index.css <br>
│   ├── index.js <br>
│   ├── logo.svg <br>
│   ├── reportWebVitals.js <br>
│   ├── setupTests.js <br>
│   ├── WordBank <br>
│   ├── ├── \<category\>.js <br>
├── .github/workflows <br>
│   ├── react.yml <br>

The key JavaScript and CSS files used during development of the hangman game can be found [here](src)
  
## Instructions

#### Hosted website
The hangman game is hosted on GitHub pages Visit [this link](https://platypew.github.io/tiktok-youth-camp-hangman/) to start playing the game immediately.

#### Available scripts
To run the hangman game in the development mode, run the command `npm start`.

To create a production bundle for the hangman game, run the command `npm run build`.

## Project Report
[The project report can be found here](doc/report.pdf). It includes the planning, technical, project and project retrospective documentation.
