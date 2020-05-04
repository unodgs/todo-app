import React from "react";
import { Box, Row } from "jsxstyle";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/todo-actions";
import { RootState } from "../store/store";
import { theme } from "../theme";

interface FilterItemProps {
    title: string;
    active: boolean;
    onFilter: () => void
}

const FilterItem: React.FC<FilterItemProps> = ({ title, active, onFilter }) => {
    return <Box
        paddingLeft="10px"
        paddingRight="10px"
        marginRight="5px"
        marginLeft="5px"
        border={active ? `1px solid ${theme.itemBorderColor}` : "1px solid transparent"}
        borderRadius="3px"
        hoverBackgroundColor={theme.itemHoverColor}
        props={{ onClick: onFilter }}>
        {title}
    </Box>
}

export const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state: RootState) => state.todo.activeFilter);
    const itemsLeft = useSelector((state: RootState) => state.todo.itemsLeft);

    return <Row borderTop={`1px solid ${theme.mainColor}`} paddingTop="10px" marginTop={10}>
        <Box width="30%">{`${itemsLeft} items left`}</Box>
        <Row flexGrow={2} justifyContent="center">
            <FilterItem
                title={"All"}
                active={activeFilter === "all"}
                onFilter={() => dispatch(setFilter("all"))}/>
            <FilterItem
                title={"Active"}
                active={activeFilter === "active"}
                onFilter={() => dispatch(setFilter("active"))}/>
            <FilterItem
                title={"Completed"}
                active={activeFilter === "completed"}
                onFilter={() => dispatch(setFilter("completed"))}/>
        </Row>
        <Box width="30%"/>
    </Row>
}
