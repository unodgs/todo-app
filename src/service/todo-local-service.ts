import { makeTodoItem, TodoId, TodoItem } from "../model/todo-item";
import { TodoService } from "./todo-service";
import { TodoFilter } from "../model/todo-filter";

export class TodoLocalService implements TodoService {
    private static TODO_LIST_KEY = "todo_list";
    
    private getItems(): TodoItem[] {
        const items = localStorage.getItem(TodoLocalService.TODO_LIST_KEY) || "[]";
        return JSON.parse(items);
    }
    
    private saveItems(items: TodoItem[]) {
        const json = JSON.stringify(items);
        localStorage.setItem(TodoLocalService.TODO_LIST_KEY, json);
    }
    
    private getNextItemId(): TodoId {
        const items = this.getItems();
        return `todo/${items.length + 1}`;
    }
    
    addTodo(title: string): Promise<TodoId> {
        return new Promise(resolve => {
            const itemId = this.getNextItemId();
            const items = [
                makeTodoItem(itemId, title),
                ...this.getItems()
            ];
            this.saveItems(items);
            resolve(itemId);
        });
    }
    
    updateTodo(todo: TodoItem): Promise<void> {
        return new Promise(resolve => {
            const items = this.getItems().map(
                item => item.id === todo.id ? todo : item
            );
            this.saveItems(items);
            resolve();
        });
    }

    removeTodo(id: TodoId): Promise<void> {
        return new Promise(resolve => {
            const items = this.getItems().filter(item => item.id !== id);
            this.saveItems(items);
            resolve();
        })
    }

    list(filter: TodoFilter): Promise<TodoItem[]> {
        return new Promise(resolve => {
            const items = this.getItems().filter(item => {
                if (filter === "active") {
                    return !item.completed;
                } else if (filter === "completed") {
                    return item.completed;
                }
                return item;
            });
            resolve(items);
        })
    }


}
