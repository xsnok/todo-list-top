import TodoItem from "./TodoItem";

class TodoList {
    constructor(listTitle, list) {
        this.listTitle = listTitle;
        this.list = [];
    }

    addItem(title, description, dueDate, priority) {
        this.list.push(new TodoItem(title, description, dueDate, priority));
        return;
    }

    removeItem(itemTitle) {
        this.list.filter(this.list, this.list.title !== itemTitle)
    }

    getList() {
        return this.list;
    }
}

export default TodoList;