import React from "react";
import { Edit } from "../components/edit";
import { editTodo, todoActions } from "../store/todo-actions";
import { useDispatch } from "react-redux";
import { TodoItem } from "../model/todo-item";

interface TodoEditProps {
    item: TodoItem;
}

export const TodoEdit: React.FC<TodoEditProps> = ({ item }) => {
    const dispatch = useDispatch();

    return <Edit initialValue={item.title} onEnter={title => {
        dispatch(editTodo(item.id, title));
        dispatch(todoActions.EDIT_ITEM(null));
    }} onEscape={() =>
        dispatch(todoActions.EDIT_ITEM(null))
    }/>
}
