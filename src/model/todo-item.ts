export type TodoId = string;

export interface TodoItem {
    id: TodoId;
    title: string;
    createdAt: number;
    completed: boolean;
}

export function makeTodoItem(id: TodoId, title: string) {
    return {
        id,
        title,
        createdAt: new Date().getTime(),
        completed: false
    }
}