import "./Keyboard.css";

function Key({ character }) {
    return <div className="character">{character}</div>;
}

function KeyboardRow({ letters }) {
    const foo = letters.map((letter) => <Key character={letter} />);

    return <div className="row"> {foo} </div>;
}

function Keyboard() {
    const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
        <div>
            <KeyboardRow letters={row1} />
            <KeyboardRow letters={row2} />
            <KeyboardRow letters={row3} />
        </div>
    );
}

export default Keyboard;
