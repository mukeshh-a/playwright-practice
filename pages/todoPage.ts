import { Page, Locator } from "@playwright/test";

export class TodoPage {
    readonly page: Page
    readonly newTodoInput: Locator;
    readonly todoItems: Locator;


    constructor( page: Page) {
        this.page = page;
        this.newTodoInput = page.getByPlaceholder("What needs to be done?");
        this.todoItems = page.getByTestId('todo-item');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc/#/');
    }

    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
        await this.todoItems
    }

    async completeTodo(text: string) {
        const item = this.todoItems.filter({ hasText: text});
        await item.getByRole('checkbox', {name: "Toggle Todo"}).check();
    }


};