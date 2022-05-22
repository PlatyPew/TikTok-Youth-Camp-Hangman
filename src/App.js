import { useState, useRef, useEffect } from "react";

import "./App.css";

import Phrase from "./Phrase";
import Keyboard from "./Keyboard";

import { getRandomPhrase, getRandomCategory } from "./WordBank/randomword";

const MAX_MISTAKES = 5;

function App() {
    const reset = () => {
        const category = getRandomCategory();
        const phrase = getRandomPhrase(category);
        return {
            mistake: 0,
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
        keyRef.current.forEach((ref) => ref.handleDisable(false));
    };

    useEffect(() => {
        if (state.mistake === MAX_MISTAKES) {
            setGameOver(true);
            setState((prevState) => {
                return { ...prevState, guessed: prevState.answer };
            });
            keyRef.current.forEach((ref) => ref.handleDisable(true));
        }
    }, [state.mistake]);

    return (
        <main className="App">
            <h1 id="header">Welcome to Hangman!</h1>
            {gameOver ? (
                <p id="mistake">Game Over!</p>
            ) : (
                <p id="mistake">Mistakes: {state.mistake}/{MAX_MISTAKES}</p>
            )}
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
