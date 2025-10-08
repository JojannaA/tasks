import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <Form.Group>
                <Form.Label>Edit Mode</Form.Label>
                <Form.Check
                    type="switch"
                    id="edit mode switch"
                    checked={editMode}
                    onChange={(event) => {
                        setEditMode(event.target.checked);
                    }}
                />
                {editMode ?
                    <div>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                            <Form.Check
                                type="checkbox"
                                id="student check"
                                label="Student"
                                checked={isStudent}
                                onChange={(event) => {
                                    setIsStudent(event.target.checked);
                                }}
                            />
                        </Form.Group>
                    </div>
                :   <div>
                        {name} is {isStudent ? "a student" : "not a student"}.
                    </div>
                }
            </Form.Group>
        </div>
    );
}
