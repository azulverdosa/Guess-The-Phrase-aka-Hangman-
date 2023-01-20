type PhraseProps = { guessedLetters: string[]; phraseToGuess: string; reveal?: boolean };

const Phrase = ({ guessedLetters, phraseToGuess, reveal = false }: PhraseProps) => {
  return (
    <main
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '.25em',
        fontSize: '4rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {phraseToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          {
            <span
              style={{
                visibility: guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
                color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
              }}
            >
              {letter}
            </span>
          }
        </span>
      ))}
      {/* is there a better way to do the above mapping without splice? */}
      {/* my attempt (but need to split words into letters but also wrap the whole word): */}
      {/* <span
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center',
        }}
      >
        {phrase}
      </span> */}
    </main>
  );
};

export default Phrase;
