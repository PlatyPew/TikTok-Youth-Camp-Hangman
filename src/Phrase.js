import { forwardRef, useImperativeHandle, useState } from "react";
import "./Phrase.css";

import getRandomPhrase from "./WordBank/randomword";

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
    // Set the current field
    const [state, setState] = useState(() => {
        const phrase = getRandomPhrase();
        return {
            mistake: 0,
            answer: [...phrase.toUpperCase()],
            guessed: [...phrase.toUpperCase()].map((letter) => {
                if (letter !== " ") return "_";
                return letter;
            }),
        };
    });

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
    }));

    return (
        <div className="word">
            {state.guessed.map((letter) => {
                if (letter === " ") return <Space />;
                if (letter === "_") return <Blank />;
                return <Letter letter={letter} />;
            })}
        </div>
    );
});

export default Phrase;
