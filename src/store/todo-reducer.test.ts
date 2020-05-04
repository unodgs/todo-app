import { initialState, todoReducer } from "./todo-reducer";
import { todoActions } from "./todo-actions";
import { makeTodoItem } from "../model/todo-item";

describe("todo-reducer", () => {

    it("should add new todo on to of existing list", () => {
        const state0 = todoReducer(initialState, todoActions.ADD_ITEM(
            makeTodoItem("todo/0", "Test 0")
        ));
        const state1 = todoReducer(state0, todoActions.ADD_ITEM(
            makeTodoItem("todo/1", "Test 1")
        ));

        expect(state0.items.length).toBe(1);
        expect(state0.items[0].id).toBe("todo/0");
        
        expect(state1.items.length).toBe(2);
        expect(state1.items[0].id).toBe("todo/1");
        expect(state1.items[1].id).toBe("todo/0");
    });

    it("should remove todo from the todo list", () => {
        const state0 = todoReducer({
            ...initialState,
            items: [
                makeTodoItem("todo/2", "Test 2"),
                makeTodoItem("todo/1", "Test 1"),
                makeTodoItem("todo/0", "Test 0"),
            ]
        }, todoActions.REMOVE_ITEM("todo/1"));
        
        expect(state0.items.length).toBe(2);
    });

    it("should set edit mode for specific todo id", () => {
        const state0 = todoReducer({
            ...initialState,
            items: [
                makeTodoItem("todo/2", "Test 2"),
                makeTodoItem("todo/1", "Test 1"),
                makeTodoItem("todo/0", "Test 0"),
            ]
        }, todoActions.EDIT_ITEM("todo/1"));
        
        expect(state0.editItemId).toBe("todo/1");
    });
    
});
