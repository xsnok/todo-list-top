import "../styles.css";

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getDetails() {
        return `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;
    }
}

let item = new TodoItem("title", "description", "dueDate", "priority");
console.log(item.getDetails());
console.log("hello world");