import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const items = useSelector((state) => state.Todo);

  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
      {items.map((item) => (
        <Todo key={item.id} title={item.title} id={item.id} />
      ))}
    </div>
  );
};

export default TodoList;