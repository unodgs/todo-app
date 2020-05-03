import { TodoLocalService } from "./todo-local-service";

export type ServiceRepository = ReturnType<typeof createServices>;

export const createServices = () => {
    const todoService = new TodoLocalService();

    return {
        todoService,
    };
};
