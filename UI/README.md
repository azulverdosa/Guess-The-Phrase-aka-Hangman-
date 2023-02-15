# Exercise Tracker

> A relatively simple Todo List fullstack project. Live demo [here](http://demoexamplecomingsoon.com 'Not a real link') (coming soon).

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

This is a simple MERN application for creating todo lists. It is also an attempt for me to learn Authentiation. I used some styling scaffolding from Semantic UI to keep things clean looking, however, I don't claim to be a designer and the design is still a work in progress. I used MongoDB to store tasks and user information and learning a bit of Mongoose was an added bonus to building this project. It was working well initially, however I seem to have missed something and now it's not working the way I want it to. I am still working on it while I look at some other projects, but it is definietly not finsihed.

## Technologies Used

---

![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&) ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)

## Features

---

Login & Registration

- current users are able to login:
  ![login Page](/UI/demo_images/1.png 'login Page')

- New users are able to register
  ![register Page](/UI/demo_images/2.png 'register Page')

User homepage

- Personal user home page
  ![user Page](/UI/demo_images/3.png 'user Page')

Lists

- Users can add or edit their personal lists
- Personal user home page
  ![list Page](/UI/demo_images/4.png 'list Page')

Create a update tasks

- Users can add items to or edit items on their lists. (this is where something starts to go wrong and I lose functionality - working on it)

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

## Usage

---

How does one go about using it? Provide various use cases and code examples here.

    write-your-code-here

## Project Status

---

In Progress

## Room for Improvement

---

Improvement Thoughts:

- This was my first attempt and adding Auth to a project and it has been a bit tricky. I am going to continue working on it, but essentially this is the main theng that needs to be added
- Styling needs updating for sure.

To do:

- [ ] Add authentication
- [ ] Update styling

## Acknowledgements

---

Many thanks to [MDN](https://developer.mozilla.org/en-US/), this project was based on [this tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning).

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

# Guess The Phrase (aka Hangman)

A farly simple project that is a phrases guessing game - aka Hangman. Styling is pretty basic, but I have plans to update and improve this. I wanted to try a bit of TypeScript in with a starter project to get my feet wet.

## \

### Basic Rundown

- Starts out with an empty gallows (again, I'm working on changing the visuals)

![start](./demo_pictures/Screenshot%202023-01-20%20at%203.00.18%20PM.png 'Game Start')

- You can use the keyboard or your mounse to select leters to try and guess the phrase.
- Letters are highlighted as you hover (blue) and when selected change in colour to indicate a correct letter (green) or incorrect (faded out) letter for the phrase.
- When an incorrect letter is selected an item is added to the picture.

![guessing](./demo_pictures/Screenshot%202023-01-20%20at%203.00.54%20PM.png 'Active Keyboard')

- After 6 incorrect guesses the phrase is revealed with missing letters shown in red and a 'Try Again' banner is shown.

![lost](./demo_pictures/Screenshot%202023-01-20%20at%203.02.58%20PM.png 'lost game')

### Some details

- This was my first attempt at useing TypeScript with React and was fairly simple but had it's own challenges.
- Styling the Keyboard took some creativity and learning how to use the usecAllback hook was an added bonus.

### What's coming next

- I have added a hint button that will show a hint to the phrase when pushed, but currently it does not work.

![hint](./demo_pictures/Screenshot%202023-01-20%20at%203.18.46%20PM.png 'Hint')

- I would like to change the hangman image to a house suspended by balloon to remove a bit of the 'death' feel to the game. Something like this:

![house](./demo_pictures/Screenshot%202023-01-20%20at%203.05.37%20PM.png 'balloon house')

- Potential for backend addition to create user login to track wins vs losses.

---

MIT License Copyright (c) [2023] [AvaElise]
