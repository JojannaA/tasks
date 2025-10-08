import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswers] = useState<string>("");

    return (
        <div>
            <Form.Group>
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setGivenAnswers(event.target.value);
                    }}
                />
            </Form.Group>
            <div>
                {" "}
                The answer is {givenAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
