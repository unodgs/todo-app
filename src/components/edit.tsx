import React, { useState } from "react";
import { Box } from "jsxstyle";

export type OnEnter = (value: string) => void; 
export type OnEscape = () => void; 

interface EditProps {
    onEnter: OnEnter;
    onEscape?: OnEscape;
    initialValue: string;
    fontSize?: number;
}

export const Edit: React.FC<EditProps> = ({ onEnter, onEscape, initialValue, fontSize }) => {
    const [value, setValue] = useState(initialValue);

    return <Box
        component="input"
        width="100%"
        fontSize={fontSize || "16px"}
        paddingLeft="10px"
        paddingRight="10px"
        border="1px solid #DADADA"
        placeholderColor="rgb(217, 217, 217)"
        props={{
            autoFocus: true,
            placeholder: "Task description",
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
            onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.keyCode === 13) {
                    onEnter(value);
                    setValue("");
                } else if (e.keyCode === 27 && onEscape) {
                    onEscape();
                }
            }
        }}
    />;
}
