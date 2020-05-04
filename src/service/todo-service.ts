import { TodoId, TodoItem } from "../model/todo-item";

export interface TodoService {
    addTodo(title: string): Promise<TodoId>;
    updateTodo(todo: TodoItem): Promise<void>;
    removeTodo(id: TodoId): Promise<void>;
    list(): Promise<TodoItem[]>;
}
