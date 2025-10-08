import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "cyan",
    ];
    const [chosenColor, setChosenColor] = useState<string>(colors[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        name="colorOptions"
                        value={color}
                        checked={chosenColor === color}
                        onChange={(e) => {
                            setChosenColor(e.target.value);
                        }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    color: "white",
                    padding: "10px",
                    marginTop: "10px",
                    textAlign: "center",
                }}
            >
                <div>You have chosen {chosenColor}.</div>
            </div>
        </div>
    );
}
