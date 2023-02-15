# Guess The Phrase (aka Hangman)

> A little game that needs a better name! Live demo [here](http://demoexamplecomingsoon.com 'Not a real link') (coming soon).

## Table of Contents

---

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## General Information

---

A farly simple TypeScript project that is a phrases guessing game - aka Hangman. Styling is pretty basic, but I have plans to update and improve this. I wanted to try a bit of TypeScript in with a starter project to get my feet wet. Styling the Keyboard took some creativity and learning how to use the useCallback hook was an added bonus.

## Technologies Used

---

![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&) ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

## Features

---

Start Page:

- Starts out with an empty gallows (again, I'm working on changing the visuals)

![start](ui/demo_pictures/Screenshot%202023-01-20%20at%203.00.18%20PM.png 'Game Start')

- You can use the keyboard or your mounse to select leters to try and guess the phrase.
- Letters are highlighted as you hover (blue) and when selected change in colour to indicate a correct letter (green) or incorrect (faded out) letter for the phrase.

Incorrect Letter Choice:

- When an incorrect letter is selected an item is added to the picture.

![guessing](ui/demo_pictures/Screenshot%202023-01-20%20at%203.00.54%20PM.png 'Active Keyboard')

Game Lost:

- After 6 incorrect guesses the phrase is revealed with missing letters shown in red and a 'Try Again' banner is shown.

![lost](ui/demo_pictures/Screenshot%202023-01-20%20at%203.02.58%20PM.png 'lost game')

## Setup

---

### Run Locally

1. Clone repo locally.
2. Run `npm install` in your bash/command line in the main project folder.
3. Run `npm run dev` in your bash/command line in the API folder.
4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Available Commands

This project was bootstrapped with [Vite](https://github.com/vitejs).

In the project directory, you can run:

`npm run dev`

Runs the server. Open [http://localhost:5173](http://localhost:5173) to view it in your browser. I am also using nodemon.

## Project Status

---

Complete

## Room for Improvement

---

Improvement Thoughts:

- I have added a hint button that will show a hint to the phrase when pushed, but currently it does not work.

![hint](./demo_pictures/Screenshot%202023-01-20%20at%203.18.46%20PM.png 'Hint')

- I would like to change the hangman image to a house suspended by balloon to remove a bit of the 'death' feel to the game. Something like this:

![house](./demo_pictures/Screenshot%202023-01-20%20at%203.05.37%20PM.png 'balloon house')

- Potential for backend addition to create user login to track wins vs losses.

To do:

- [ ] Give hint button functionality
- [ ] Update styling
- [ ] Update image
- [ ] Add winner slogan

## Acknowledgements

---

Many thanks to [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified), this project was based on [this tutorial](https://www.youtube.com/watch?v=-ONUyenGnWw).

## Contact

---

Created by [@azulverdosa](ellemocambo@gmail.com) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')

## 🤝 Support

---

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## License

---

MIT License Copyright (c) [2023] [AvaElise]

---

### What's coming next

---

MIT License Copyright (c) [2023] [AvaElise]
