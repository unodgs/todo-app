import { TodoState } from "./todo-state";
import { TodoAction, todoActions } from "./todo-actions";
import { TodoItem } from "../model/todo-item";
import { TodoFilter } from "../model/todo-filter";

export const initialState: TodoState = {
    items: [],
    activeFilter: "all",
    itemsLeft: 0,
    editItemId: null
};

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    return todoActions.match(action, {
        ADD_ITEM: item => {
            const items = [item, ...state.items];
            return {
                ...state,
                items,
                itemsLeft: getItemsLeft(items) 
            }
        },
        UPDATE_ITEM: updatedItem => {
            const items = state.items.map(
                item => item.id === updatedItem.id ? updatedItem : item
            ); 
            return {
                ...state,
                items,
                itemsLeft: getItemsLeft(items)
            }
        },
        REMOVE_ITEM: id => {
            const items = state.items.filter(
                item => item.id !== id
            );
            return {
                ...state,
                items,
                itemsLeft: getItemsLeft(items)
            }
        },
        EDIT_ITEM: id => ({ ...state, editItemId: id }),
        SET_ITEMS: items => ({
            ...state,
            items,
            itemsLeft: getItemsLeft(items)
        }),
        SET_ACTIVE_FILTER: activeFilter => ({
           ...state,
           activeFilter 
        }),
        default: () => state,
    });
};

function getItemsLeft(items: TodoItem[]): number {
    return items.reduce((acc, curr) => !curr.completed ? acc + 1 : acc, 0);
}

export function getFilteredItems(items: TodoItem[], filter: TodoFilter): TodoItem[] {
    return items.filter(item => {
        if (filter === "active") {
            return !item.completed;
        } else if (filter === "completed") {
            return item.completed;
        }
        return item;
    })
}