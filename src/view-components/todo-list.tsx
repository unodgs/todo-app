import React from "react";
import { Box } from "jsxstyle";
import { TodoItem } from "../model/todo-item";
import { TodoListItem } from "./todo-list-item";

export const TodoList: React.FC<{ items: TodoItem[] }> = ({ items }) => {
    return <Box maxHeight={400} height={400} overflowY={"auto"}>
        {items.map(item => <TodoListItem key={item.id} item={item}/>)}
    </Box>
}
