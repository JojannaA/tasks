import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        type === "short_answer_question" ?
            setType("multiple_choice_question")
        :   setType("short_answer_question");
    }
    return (
        <div>
            <div>
                {type === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </div>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
