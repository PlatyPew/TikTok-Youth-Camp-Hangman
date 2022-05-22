import { useState } from "react";
import "./Keyboard.css";

function Key({ character, guess }) {
    const [disable, setDisable] = useState(false);

    const handleGuess = (letter) => {
        guess(letter);
        setDisable(true);
    };

    return (
        <button className="character" disabled={disable} onClick={() => handleGuess(character)}>
            {character}
        </button>
    );
}

function KeyboardRow({ letters, guess }) {
    const letter = letters.map((letter) => <Key key={letter} character={letter} guess={guess} />);

    return <section className="row">{letter}</section>;
}

function Keyboard({ guess }) {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleReset = () => {};

    return (
        <section>
            <KeyboardRow letters={row1} guess={guess} />
            <KeyboardRow letters={row2} guess={guess} />
            <KeyboardRow letters={row3} guess={guess} />
        </section>
    );
}

export default Keyboard;
