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

function Phrase({ guessed }) {
    return (
        <section className="word">
            {guessed.map((letter) => {
                if (letter === " ") return <Space />;
                if (letter === "_") return <Blank />;
                return <Letter letter={letter} />;
            })}
        </section>
    );
}

export default Phrase;
