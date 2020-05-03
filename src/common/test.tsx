import { createServices } from "../service/services";
import { configureStore, RootStore } from "../store/store";
import { Provider } from "react-redux";
import { render } from '@testing-library/react';
import React from "react";

export function createTestStore() {
    const services = createServices();
    return {
        store: configureStore(services),
        services: services
    };
}

export function renderWithRedux(ui: JSX.Element, store: RootStore) {
    const jsx = <Provider store={store}>
        {ui}
    </Provider>;

    return {
        ...render(jsx),
        store,
    }
}
