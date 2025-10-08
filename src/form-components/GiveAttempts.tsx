import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestAttempt, setRequestAttempt] = useState<string>("");

    const parseRequest = parseInt(requestAttempt);
    return (
        <div>
            <p>Attempt left: {attemptsLeft}</p>

            <Form.Group>
                <Form.Label>
                    Want more attempts? Type here! Then click the gain attempts
                    Button
                </Form.Label>
                <Form.Control
                    type="number"
                    value={requestAttempt}
                    onChange={(event) => {
                        setRequestAttempt(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    if (!isNaN(parseRequest)) {
                        setAttemptsLeft(attemptsLeft + parseRequest);
                    }
                }}
            >
                gain
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
        </div>
    );
}
