import IdCounter from "./IdCounter";

class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.idCounter = new IdCounter();
        this.id = this.idCounter.generateId();
    }

    getDetail(detailType) {
        if (typeof this[detailType] === "undefined") {
            console.log("ERROR: Detail type not found")
            return;
        }
        return this[detailType];
    }
}

export default TodoItem;