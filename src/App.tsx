import React from "react";
import "./App.css";
import image from "./silly_owl.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Joanna Amoah Hello
                World
            </header>
            <h1> Header text :D</h1>
            <img src={image} alt="Silly Owl" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
