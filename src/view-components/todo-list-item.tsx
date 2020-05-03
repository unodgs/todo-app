import React from "react";
import { Box, Col, Row } from "jsxstyle";
import TimeAgo from "react-timeago";
import { TodoItem } from "../model/todo-item";
import { CheckBox } from "../components/checkbox";
import { useDispatch } from "react-redux";
import { markCompleted, todoActions } from "../store/todo-actions";

export const TodoListItem: React.FC<{ item: TodoItem }> = ({ item }) => {
    const dispatch = useDispatch();
    
    return <Col padding="10px 0px" hoverBackgroundColor="rgba(0, 255, 0, 0.05)">
        <Row alignItems="center">
            <Box paddingLeft={10} textAlign="center" fontSize="24px">
                <CheckBox checked={item.completed} onChange={checked => {
                    dispatch(markCompleted(item.id, checked));
                }}/>
            </Box>
            <Box 
                flexGrow={2}
                paddingLeft="10px"
                paddingRight="10px"
                textDecoration={item.completed ? "line-through" : "none"}>
                {item.title}
            </Box>
            <Box fontSize="16px" paddingRight={10}><i className="fas fa-edit" style={{ color: "#DADADA" }}/></Box>
            <Box fontSize="16px" paddingRight={10}><i className="fas fa-times" style={{ color: "#DADADA" }}/></Box>
        </Row>
        <Box paddingLeft={10} paddingTop={5} fontSize="10px">
            <TimeAgo date={item.createdAt}/>
        </Box>
    </Col>
}
