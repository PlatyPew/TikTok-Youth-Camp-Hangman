import { forwardRef, useImperativeHandle, useState } from "react";
import "./Phrase.css";

import { getRandomPhrase, getRandomCategory } from "./WordBank/randomword";

function Letter({ letter }) {
    return <span className="letter blank">{letter}</span>;
}

function Blank() {
    return <span className="blank"></span>;
}

function Space() {
    return <span className="space"></span>;
}

const Phrase = forwardRef((_, ref) => {
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

    useImperativeHandle(ref, () => ({
        // Fill the letter if it's in the phrase
        handleGuess: (letter) => {
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
        },
        handleReset: () => setState(reset()),
    }));

    return (
        <>
            <main className="word">
                {state.guessed.map((letter) => {
                    if (letter === " ") return <Space />;
                    if (letter === "_") return <Blank />;
                    return <Letter letter={letter} />;
                })}
            </main>
            <p id="category">Category: {state.category}</p>
        </>
    );
});

export default Phrase;
