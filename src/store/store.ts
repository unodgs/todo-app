import { Action, applyMiddleware, combineReducers, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ServiceRepository } from "../service/services";
import { todoReducer } from "./todo-reducer";

const devMode = process.env.NODE_ENV === 'development';

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export type RootStore = Store<RootState, Action> & { dispatch: ThunkDispatch<RootState, ServiceRepository, Action> };

export type ThunkResult<R> = ThunkAction<R, RootState, ServiceRepository, Action>;

export function configureStore(services: ServiceRepository): RootStore {
    const rootReducer = createRootReducer(services);

    const middlewares = applyMiddleware(
        thunkMiddleware.withExtraArgument(services)
    );

    const enhancer = devMode ? composeWithDevTools(middlewares) : compose(middlewares);
    return createStore(rootReducer, enhancer);
}

const createRootReducer = (services: ServiceRepository) => combineReducers({
    todo: todoReducer
});
