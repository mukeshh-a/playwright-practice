import { test as base } from '@playwright/test';
import { TodoPage } from '../pages/todoPage';

type PageFixtures = {
    todoPage: TodoPage;
};

export const test = base.extend<PageFixtures>({
    todoPage: async ({ page}, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await use(todoPage);
    }
});

export { expect } from '@playwright/test';