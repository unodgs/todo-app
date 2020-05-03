import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./view/app";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import { configureStore } from "./store/store";
import { createServices } from "./service/services";
import { Provider } from "react-redux";
import { loadTodos } from "./store/todo-actions";

const services = createServices();

const store = configureStore(services);
store.dispatch(loadTodos("all"));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
