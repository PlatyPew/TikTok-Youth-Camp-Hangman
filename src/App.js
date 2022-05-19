import "./App.css";

import Phrase from "./Phrase";
import Keyboard from "./Keyboard";

function App() {
    return (
        <div className="App">
            <h1 className="text-4xl text-neutral-100 py-3">Welcome to Hangman!</h1>
            <Phrase phrase="Lorem Ipsum" />

            <Keyboard />
        </div>
    );
}

export default App;
