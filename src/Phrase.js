import { useState } from "react";
import "./Phrase.css";

function Letter({ letter }) {
    return <span className="letter blank">{letter}</span>;
}

function Blank() {
    return <span className="blank"></span>;
}

function Space() {
    return <span className="space"></span>;
}

function Phrase({ phrase }) {
    phrase = [...phrase.toUpperCase()];

    // Set the current field
    const [state, setState] = useState(() => {
        return phrase.map((letter) => {
            if (letter !== " ") return "_";
            return letter;
        });
    });

    // Fill the letter if it's in the phrase
    const fillLetter = (letter) => {
        if (phrase.includes(letter))
            setState((prevField) => {
                return phrase.map((value, i) => {
                    if (value === letter) return letter;
                    return prevField[i];
                });
            });
    };

    return (
        <div className="word">
            {state.map((letter) => {
                if (letter === " ") return <Space />;
                if (letter === "_") return <Blank />;
                return <Letter letter={letter} />;
            })}
        </div>
    );
}

export default Phrase;
