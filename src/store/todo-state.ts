import { TodoItem } from "../model/todo-item";
import { TodoFilter } from "../model/todo-filter";

export type TodoState = {
    items: TodoItem[];
    activeFilter: TodoFilter;
    itemsLeft: number
};
