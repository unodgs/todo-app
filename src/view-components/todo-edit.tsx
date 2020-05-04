import React from "react";
import { Row } from "jsxstyle";
import { Edit, OnEnter, OnEscape } from "../components/edit";

interface TodoEditProps {
    onEnter: OnEnter;
    onEscape?: OnEscape;
    initialValue: string;
}

export const TodoEdit: React.FC<TodoEditProps> = ({ onEnter, onEscape, initialValue }) => {
    return <Row marginBottom="10px" height="50px">
        <Edit onEnter={onEnter} onEscape={onEscape} initialValue={initialValue} fontSize={16}/>
    </Row>;
}
