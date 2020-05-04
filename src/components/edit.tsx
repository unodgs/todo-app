import React, { useState } from "react";
import { Box } from "jsxstyle";
import { theme } from "../theme";

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
    const [error, setError] = useState(false);

    return <Box
        component="input"
        width="100%"
        fontSize={fontSize || "16px"}
        paddingLeft="10px"
        paddingRight="10px"
        border={`1px solid ${error ? theme.errorColor : theme.mainColor}`}
        placeholderColor={theme.placeholderColor}
        props={{
            autoFocus: true,
            placeholder: "Task description",
            value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                setValue(e.target.value);
                setError(false);
            },
            onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.keyCode === 13) {
                    if (value.trim() === "") {
                        setError(true);
                    } else {
                        onEnter(value);
                        setValue("");
                    }
                } else if (e.keyCode === 27 && onEscape) {
                    onEscape();
                }
            }
        }}
    />;
}
