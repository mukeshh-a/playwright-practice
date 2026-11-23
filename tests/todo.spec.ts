import { test, expect } from '@playwright/test';

test.describe('Todo App', () => {
    test.beforeEach(async ({ page}) => {
        await page.goto('https://demo.playwright.dev/todomvc/#/');
    });

    test('add a todo item', async ({ page }) => {
        const input = page.getByPlaceholder("What needs to be done?");
        await input.visible().fill('Practice Playwright');
        await input.press('Enter');

        await expect(page.getByTestId('todo-title')).toHaveText('Practice Playwright')
    });   
    
    test('complete a todo item', async ({ page }) => {
        const input = page.getByPlaceholder("What needs to be done?");
        await input.visible().fill('write page object');
        await input.press('Enter');

        await page.getByRole('checkbox', {name: "Toggle Todo"}).check();
        console.log(await page.getByTestId('todo-item').getAttribute('class'));

        await expect(page.getByTestId('todo-item')).toHaveClass("completed");
    }); 
})