const state = {
    todos: [],
};

class TodoListItem {
    constructor(todo) {
        // <str> that represents what to actually do, ie: wake up
        this.todo = todo;
        // <bool> that represents whether todo is completed or not
        // initially, always false
        this.isComplete = false;
    }
    toString() {
        return this.todo;
    }
}

class TodoList {
    constructor() {
        // <TodoListItem[]> list that represents each todolist item
        this.todos = [];
    }
    addTodo(todoListItem) {
        // add to todos a <TodoListItem>
        if (!todoListItem instanceof TodoListItem) {
            throw new Error('Must be a TodoListItem class instance!')
        }

        this.todos.push(todoListItem)
    }
    getTodosForState() {
        return this.todos.map(todoListItem => todoListItem.toString());
    }
}