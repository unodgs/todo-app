import React from "react";
import { Box, Col, Row } from "jsxstyle";
import TimeAgo from "react-timeago";
import { TodoItem } from "../model/todo-item";
import { CheckBox } from "../components/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { markCompleted, removeTodo, todoActions } from "../store/todo-actions";
import { RootState } from "../store/store";
import { theme } from "../theme";
import { TodoEdit } from "./todo-edit";

export const TodoListItem: React.FC<{ item: TodoItem }> = ({ item }) => {
    const dispatch = useDispatch();
    const editMode = useSelector((state: RootState) => state.todo.editItemId === item.id);
    
    return <Col padding="10px 0px" hoverBackgroundColor={theme.itemHoverColor}>
        <Row alignItems="center">
            <Box
                paddingLeft={10}
                textAlign="center"
                fontSize="24px"
                color={theme.mainColor}
                hoverColor={theme.mainHoverColor}>
                <CheckBox checked={item.completed} onChange={checked => {
                    dispatch(markCompleted(item.id, checked));
                }}/>
            </Box>
            <Box
                flexGrow={2}
                paddingLeft="10px"
                paddingRight="10px"
                textDecoration={item.completed ? "line-through" : "none"}>
                {editMode ? <TodoEdit item={item}/> : item.title}
            </Box>
            <Box
                fontSize="18px"
                paddingRight={10}
                color={theme.mainColor}
                hoverColor={theme.mainHoverColor}>
                <i className="fas fa-edit" onClick={
                    () => dispatch(todoActions.EDIT_ITEM(item.id))
                }/>
            </Box>
            <Box
                fontSize="18px"
                paddingRight={10}
                color={theme.mainColor}
                hoverColor={theme.mainHoverColor}>
                <i className="fas fa-times" onClick={() => {
                    dispatch(todoActions.EDIT_ITEM(null));
                    dispatch(removeTodo(item.id));
                }}/>
            </Box>
        </Row>
        <Box paddingLeft={10} paddingTop={5} fontSize="10px">
            <TimeAgo date={item.createdAt}/>
        </Box>
    </Col>
}
