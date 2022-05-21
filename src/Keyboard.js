import { forwardRef } from "react";
import "./Keyboard.css";

const Key = forwardRef(({ character }, ref) => {
    return (
        <button className="character" onClick={() => ref.current.fillLetter(character)}>
            {character}
        </button>
    );
});

const KeyboardRow = forwardRef(({ letters }, ref) => {
    const letter = letters.map((letter) => <Key ref={ref} key={letter} character={letter} />);

    return <section className="row"> {letter} </section>;
});

const Keyboard = forwardRef((_, ref) => {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <>
            <KeyboardRow ref={ref} letters={row1} />
            <KeyboardRow ref={ref} letters={row2} />
            <KeyboardRow ref={ref} letters={row3} />
        </>
    );
});

export default Keyboard;
