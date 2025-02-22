class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
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