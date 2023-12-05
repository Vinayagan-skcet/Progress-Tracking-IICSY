import React from "react";
import TodoItem from "./Todolist"; // Adjust the import path as necessary
function TodoorgList() {
  const items = ["Item 1", "Item 2", "Item 3"]; // Example to-do items
  return (
    <ul>
      {items.map((item, index) => {
       return <TodoItem key={index} content={item} />
      })}
    </ul>
  );
}
export default TodoorgList;
