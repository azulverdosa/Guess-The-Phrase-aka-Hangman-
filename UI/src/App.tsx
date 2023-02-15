import { useState, useEffect, useCallback } from 'react';
import reactLogo from './assets/react.svg';
import phraseList from './phraseList.json';
import Drawing from './components/Drawing';
import Phrase from './components/Phrase';
import Hint from './components/Hint';
import Keyboard from './components/Keyboard';
import HintButton from './components/HintButton';

const getPhrase = () => {
  return phraseList[Math.floor(Math.random() * phraseList.length)];
};

const App = () => {
  const [phraseToGuess, setPhraseToGuess] = useState(getPhrase);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !phraseToGuess.phrase.includes(letter)
  );
  //above code says in the array of letters that we have guessed (guessedLetters) the incorrect letters = all of the letters that are NOT in the phraseToGuess

  const correctLetters = guessedLetters.filter((letter) => phraseToGuess.phrase.includes(letter));
  //above code says in the array of letters

  const loser = incorrectLetters.length >= 6;
  const winner = phraseToGuess.phrase.split('').every((letter) => guessedLetters.includes(letter)); //if every iteration of this loop returns true then .every will return true as well

  //have to review useCallback
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || loser || winner) return; //if guessedLetters contains the letter that is beinf slected, return

      setGuessedLetters((currentLetters) => [...currentLetters, letter]); //gets the array of all the current letters and adds the new letter to the end of the array
    },
    [guessedLetters, loser, winner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      //event listening
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return; //regEx check: if keypress DOES NOT match a-z, return

      e.preventDefault();
      addGuessedLetter(key); //otherwise call this function
    };

    document.addEventListener('keypress', handler); //adding event listener

    return () => {
      document.removeEventListener('keypress', handler); //removing event listener
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      //event listening
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setPhraseToGuess(getPhrase()); //otherwise call this function
    };

    document.addEventListener('keypress', handler); //adding event listener

    return () => {
      document.removeEventListener('keypress', handler); //removing event listener
    };
  }, []);

  console.log('phraseToGuess :>> ', phraseToGuess);
  console.log('phraseList phrase :>> ', phraseToGuess.phrase);
  console.log('phraseList hint :>> ', phraseToGuess.hint);

  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontFamily: 'monospace', fontSize: '2rem', textAlign: 'center' }}>
        {winner && 'Chicken Dinner! 🎉  Refresh to play again!'}
        {loser && 'Too bad, so sad. Refresh to try again. 🙃'}
      </div>

      <Drawing numberOfIncorrectGuesses={incorrectLetters.length} />

      <Phrase reveal={loser} guessedLetters={guessedLetters} phraseToGuess={phraseToGuess.phrase} />

      {/* next style note is to creat grid for keyboard - better way to do this? */}
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          activeLetter={correctLetters}
          inactiveLetter={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={winner || loser}
        />
      </div>
      <HintButton />
      <Hint />
    </div>
  );
};

export default App;
