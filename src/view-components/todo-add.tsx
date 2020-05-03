import React, { useState } from "react";
import { Box, Row } from "jsxstyle";

export const TodoAdd: React.FC<{ onEnter: (value: string) => void }> = ({ onEnter }) => {
    const [value, setValue] = useState("");

    return <Row marginBottom="10px" height="50px">
        <Box component="input"
             width="100%"
             fontSize="24px"
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
                     }
                 }
             }}
        />
    </Row>;
}
