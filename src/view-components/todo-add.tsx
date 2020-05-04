import React from "react";
import { Row } from "jsxstyle";
import { Edit, OnEnter } from "../components/edit";

export const TodoAdd: React.FC<{ onEnter: OnEnter }> = ({ onEnter }) => {
    return <Row marginBottom="10px" height="50px">
        <Edit initialValue={""} onEnter={onEnter} fontSize={24}/>
    </Row>;
}
