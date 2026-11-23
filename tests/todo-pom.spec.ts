import { test, expect } from '../fixtures/fixtures';

test('add a todo item', async({ todoPage }) => {
    await todoPage.addTodo('Practice Playwright');
    await expect(todoPage.todoItems).toHaveCount(1);
    await expect(todoPage.todoItems).toHaveText('Practice Playwright');
});

test('complete a test item', async({ todoPage}) => {
    await todoPage.addTodo('Write Page Object');
    await todoPage.completeTodo('Write Page Object');
    await expect(todoPage.todoItems).toHaveClass(/completed/);
});