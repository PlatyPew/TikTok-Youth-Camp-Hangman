import { forwardRef, useImperativeHandle, useState } from "react";
import "./Keyboard.css";

const Key = forwardRef(({ character, guess }, ref) => {
    const [disable, setDisable] = useState(false);

    const handleGuess = (letter) => {
        guess(letter);
        setDisable(true);
    };

    useImperativeHandle(ref, () => ({
        handleReset: () => setDisable(false),
    }));

    return (
        <button className="character" disabled={disable} onClick={() => handleGuess(character)}>
            {character}
        </button>
    );
});

const KeyboardRow = forwardRef(({ letters, guess }, ref) => {
    const letter = letters.map((letter) => (
        <Key ref={ref} key={letter} character={letter} guess={guess} />
    ));

    return <section className="row">{letter}</section>;
});

const Keyboard = forwardRef(({ guess }, ref) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <section>
            <KeyboardRow ref={ref} letters={row1} guess={guess} />
            <KeyboardRow ref={ref} letters={row2} guess={guess} />
            <KeyboardRow ref={ref} letters={row3} guess={guess} />
        </section>
    );
});

export default Keyboard;
