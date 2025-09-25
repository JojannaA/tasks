import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [show, setShow] = useState<boolean>(false);

    function toggleAnswer(): void {
        setShow(!show);
    }

    return (
        <div>
            <Button onClick={toggleAnswer}>Reveal Answer</Button>{" "}
            {show && <div>42</div>}
        </div>
    );
}
