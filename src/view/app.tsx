import React from "react";
import { Box } from "jsxstyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Header } from "../view-components/header";
import { TodoList } from "../view-components/todo-list";
import { TodoAdd } from "../view-components/todo-add";
import { Filters } from "../view-components/filters";
import { addTodo } from "../store/todo-actions";
import { getFilteredItems } from "../store/todo-reducer";

export const App: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.todo.items);
    const filter = useSelector((state: RootState) => state.todo.activeFilter);
    const filteredItems = getFilteredItems(items, filter);
    
    return <Box maxWidth={800} margin="0 auto">
        <Header title="TODO APP"/>
        <Box
            padding="10px"
            margin="30px"
            marginTop="10px"
            boxShadow="0px 0px 13px 1px rgba(0,0,0,0.15)">
            <TodoAdd onEnter={title => dispatch(addTodo(title))}/>
            <TodoList items={filteredItems}/>
            <Filters/>
        </Box>
    </Box>;

}
