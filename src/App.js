import { useState, useRef, useEffect } from "react";

import "./App.css";

import Phrase from "./Phrase";
import Keyboard from "./Keyboard";

import { getRandomPhrase, getRandomCategory } from "./WordBank/randomword";

const MAX_MISTAKES = 9;

function App() {
    const [streak, setStreak] = useState(0);

    const reset = () => {
        const category = getRandomCategory();
        const phrase = getRandomPhrase(category);
        return {
            mistake: 0,
            streak: streak,
            category: category,
            answer: [...phrase.toUpperCase()],
            guessed: [...phrase.toUpperCase()].map((letter) => {
                if (letter !== " ") return "_";
                return letter;
            }),
        };
    };

    // Set the current field
    const [state, setState] = useState(() => reset());
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);

    // Fill the letter if it's in the phrase
    const handleGuess = (letter) => {
        if (state.answer.includes(letter))
            setState((prevState) => {
                return {
                    ...prevState,
                    guessed: state.answer.map((value, i) => {
                        if (value === letter) return letter;
                        return prevState.guessed[i];
                    }),
                };
            });
        else
            setState((prevState) => {
                return { ...prevState, mistake: prevState.mistake + 1 };
            });
    };

    const keyRef = useRef([]);
    keyRef.current = [];

    const addToRefs = (el) => {
        if (el && !keyRef.current.includes(el)) keyRef.current.push(el);
    };

    const handleReset = () => {
        setState(reset());
        setGameOver(false);
        setWin(false);
        keyRef.current.forEach((ref) => ref.handleDisable(false));
    };

    useEffect(() => {
        if (state.mistake === MAX_MISTAKES) {
            setGameOver(true);
            setState((prevState) => {
                return { ...prevState, guessed: prevState.answer };
            });
            keyRef.current.forEach((ref) => ref.handleDisable(true));
            setStreak(0);
        }
    }, [state.mistake]);

    useEffect(() => {
        if (state.guessed.join("") === state.answer.join("")) {
            keyRef.current.forEach((ref) => ref.handleDisable(true));
            if (!gameOver) {
                setWin(true);
                setStreak((prevStreak) => prevStreak + 1);
            }
        }
    }, [state.guessed, gameOver, state.answer]);

    return (
        <main className="App">
            <h1 id="header">Welcome to Hangman!</h1>
            {win ? <p className="score">You Solved It!</p> : <></>}
            {gameOver ? (
                <p className="score">Game Over!</p>
            ) : (
                <p className="score">
                    Mistakes: {state.mistake}/{MAX_MISTAKES}
                </p>
            )}
            <p className="score">Streak: {streak}</p>
            <Phrase guessed={state.guessed} />
            <p id="category">Category: {state.category}</p>

            <Keyboard ref={addToRefs} guess={handleGuess} />
            <button id="reset" onClick={handleReset}>
                Reset
            </button>
        </main>
    );
}

export default App;
