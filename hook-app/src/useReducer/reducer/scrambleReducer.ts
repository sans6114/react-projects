const GAME_WORDS = [
  "REACT",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "HTML",
  "ANGULAR",
  "SOLID",
  "NODE",
  "VUEJS",
  "SVELTE",
  "EXPRESS",
  "MONGODB",
  "POSTGRES",
  "DOCKER",
  "KUBERNETES",
  "WEBPACK",
  "VITE",
  "TAILWIND",
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = "") => {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

interface ScrambleState {
  words: string[];
  lengthWords: number;
  currentWord: string;
  scrambledWord: string;
  points: number;
  errors: number;
  maxError: number;
  skipActual: number;
  maxSkip: number;
  gameOver: boolean;
}

export const getInitialState = (): ScrambleState => {
  const shuffleWords = shuffleArray([...GAME_WORDS]);
  const initialCurrentWord = shuffleWords[0];
  const initialScrambledWord = scrambleWord(initialCurrentWord);
  return {
    words: shuffleWords,
    currentWord: initialCurrentWord,
    lengthWords: shuffleWords.length,
    scrambledWord: initialScrambledWord,
    points: 0,
    errors: 0,
    maxError: 3,
    skipActual: 0,
    maxSkip: 3,
    gameOver: false,
  };
};

export type ScrambleAction =
  | { type: "guess"; payload: string }
  | { type: "skip" }
  | { type: "play-again" };

export const scrambleReducer = (
  state: ScrambleState,
  action: ScrambleAction,
): ScrambleState => {
  const { type, payload } = action;

  switch (type) {
    case "guess": {
      if (payload === state.currentWord) {
        const newPoints = state.points + 1;
        const newArray = shuffleArray(state.words.slice(1));
        const newCurrentWord = newArray[0];
        const newScrambledWord = scrambleWord(newCurrentWord);

        return {
          ...state,
          words: newArray,
          currentWord: newCurrentWord,
          scrambledWord: newScrambledWord,
          points: newPoints,
        };
      }
      const newErrors = state.errors + 1;
      const isGameOver = newErrors >= state.maxError;
      return {
        ...state,
        errors: newErrors,
        gameOver: isGameOver,
      };
    }
    case "skip": {
      const newSkip = state.skipActual + 1;
      const newArray = shuffleArray(state.words.slice(1));
      const newCurrentWord = newArray[0];
      const newScrambledWord = scrambleWord(newCurrentWord);
      return {
        ...state,
        skipActual: newSkip,
        words: newArray,
        currentWord: newCurrentWord,
        scrambledWord: newScrambledWord,
      };
    }
    case "play-again": {
      const newState = getInitialState();
      return newState;
    }
    default:
      return state;
  }
};
