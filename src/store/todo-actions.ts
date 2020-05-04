import { unionize } from "../common/unionize";
import { ofType, UnionOf } from "unionize";
import { makeTodoItem, TodoId, TodoItem } from "../model/todo-item";
import { ThunkResult } from "./store";
import { TodoFilter } from "../model/todo-filter";

export const todoActions = unionize({
    ADD_ITEM: ofType<TodoItem>(),
    REMOVE_ITEM: ofType<TodoId>(),
    UPDATE_ITEM: ofType<TodoItem>(),
    EDIT_ITEM: ofType<TodoId | null>(),
    SET_ITEMS: ofType<TodoItem[]>(),
    SET_ACTIVE_FILTER: ofType<TodoFilter>()
});

export type TodoAction = UnionOf<typeof todoActions>;

export const loadTodos = (): ThunkResult<Promise<void>> =>
    async (dispatch, getState, services) => {
        const items = await services.todoService.list();
        dispatch(todoActions.SET_ITEMS(items));
    };


export const addTodo = (title: string): ThunkResult<Promise<void>> =>
    async (dispatch, getState, services) => {
        const id = await services.todoService.addTodo(title);
        await dispatch(todoActions.ADD_ITEM(makeTodoItem(id, title)));
    };

export const editTodo = (id: TodoId, title: string): ThunkResult<Promise<void>> =>
    async (dispatch, getState, services) => {
        const item = getState().todo.items
            .find(it => it.id === id);
        
        if (item) {
            item.title = title;
            await services.todoService.updateTodo(item);
            dispatch(todoActions.UPDATE_ITEM(item));
        }
    };

export const markCompleted = (id: TodoId, completed: boolean): ThunkResult<Promise<void>> =>
    async (dispatch, getState, services) => {
        const item = getState().todo.items
            .find(it => it.id === id);
        
        if (item) {
            item.completed = completed;
            await services.todoService.updateTodo(item);
            dispatch(todoActions.UPDATE_ITEM(item));
        }
    };

export const setFilter = (filter: TodoFilter): ThunkResult<void> =>
    (dispatch) => {
        dispatch(todoActions.SET_ACTIVE_FILTER(filter));
    }
