import React from "react";
import "./App.css";
import image from "./image_folder/silly_owl.jpg";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Joanna Amoah Hello
                World
            </header>
            <h1> Header text :D</h1>
            <img src={image} alt="Silly Owl" />
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
            <ul>
                <li>Thing one</li>
                <li>Thing two</li>
                <li>Thing three</li>
            </ul>
            <div className="triangle">
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
