import React from "react";
import { Box } from "jsxstyle";

export const Header: React.FC<{ title: string }> = ({ title }) => {
    return <Box
        textAlign="center"
        fontSize="24px"
        paddingBottom="5px">
        {title}
    </Box>
}
