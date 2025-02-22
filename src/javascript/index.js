import "../styles.css";
import TodoItem from "./TodoItem";

let todoItem = new TodoItem("Black", "description", "dueDate", "priority");

console.log(todoItem.getDetail("title"));
console.log("hello world");