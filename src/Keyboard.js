import "./Keyboard.css";

function Key({ character }) {
    function sayChar() {
        console.log(character);
    }

    return (
        <button className="character" onClick={sayChar}>
            {character}
        </button>
    );
}

function KeyboardRow({ letters }) {
    const letter = letters.map((letter) => <Key key={letter} character={letter} />);

    return <section className="row"> {letter} </section>;
}

function Keyboard() {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <>
            <KeyboardRow letters={row1} />
            <KeyboardRow letters={row2} />
            <KeyboardRow letters={row3} />
        </>
    );
}

export default Keyboard;
