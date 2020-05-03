import { TodoId, TodoItem } from "../model/todo-item";
import { TodoFilter } from "../model/todo-filter";

export interface TodoService {
    addTodo(title: string): Promise<TodoId>;
    updateTodo(todo: TodoItem): Promise<void>;
    removeTodo(id: TodoId): Promise<void>;
    list(filter: TodoFilter): Promise<TodoItem[]>;
}
