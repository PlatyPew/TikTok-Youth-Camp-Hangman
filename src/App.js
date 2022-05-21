import { useRef } from "react";

import "./App.css";

import Phrase from "./Phrase";
import Keyboard from "./Keyboard";

function App() {
    const phraseRef = useRef();
    return (
        <div className="App">
            <h1 className="text-4xl text-neutral-100 py-3">Welcome to Hangman!</h1>
            <Phrase ref={phraseRef} phrase="Lorem Ipsum" />

            <Keyboard ref={phraseRef} />
        </div>
    );
}

export default App;
