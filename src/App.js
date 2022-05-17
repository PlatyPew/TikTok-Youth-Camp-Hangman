import "./App.css";
import Keyboard from "./Keyboard";

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="text-4xl text-neutral-100 py-3">Welcome to Hangman!</h1>
            </header>
            <Keyboard />
        </div>
    );
}

export default App;
