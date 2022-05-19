import "./Phrase.css";

function Letter({ letter }) {
    return <span className="letter">{letter}</span>;
}

function Space() {
    return <span className="space"></span>;
}

function Phrase({ phrase }) {
    const sentence = [...phrase.toUpperCase()].map((letter) => {
        if (letter === " ") return <Space />;

        return <Letter letter={letter} />;
    });

    return <div className="word">{sentence}</div>;
}

export default Phrase;
