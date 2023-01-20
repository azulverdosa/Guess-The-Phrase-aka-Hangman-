# Guess The Phrase (aka Hangman)

A farly simple project that is a phrases guessing game - aka Hangman. Styling is pretty basic, but I have plans to update and improve this. I wanted to try a bit of TypeScript in with a starter project to get my feet wet.

---

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
