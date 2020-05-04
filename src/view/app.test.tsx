import React from "react";
import { createTestStore, renderWithRedux } from "../common/test-utils";
import { makeTodoItem, TodoItem } from "../model/todo-item";
import { App } from "./app";
import { loadTodos } from "../store/todo-actions";

describe('App', () => {
    it('should render stored todo list', async () => {
        const { store, services } = createTestStore();
        const todoServiceList = jest.spyOn(services.todoService, 'list')
            .mockReturnValue(Promise.resolve([
                makeTodoItem("todo/2", "Test 2"), 
                makeTodoItem("todo/1", "Test 1"), 
                makeTodoItem("todo/0", "Test 0") 
            ] as TodoItem[]));
        
        store.dispatch(loadTodos());
        const { findByText } = renderWithRedux(<App/>, store);

        expect(todoServiceList).toHaveBeenCalled();

        await findByText("Test 2");
        await findByText("Test 1");
        await findByText("Test 0");
    });
});
