import React from "react";
import FlipMove from "react-flip-move";

const TodoList = ({ todoList, removeBtn }) => {
  return (
    <div>
      <ul className="mt-10">
        <FlipMove duration={250} easing="ease-in-out">
          {todoList.map((todo) => (
            <li
              key={todo}
              className="bg-blue-200 flex justify-between items-center px-5 py-2 mb-5 rounded-md"
            >
              {todo}
              <button
                className="p-1 border-solid border-2 border-blue-600 rounded-md"
                onClick={(e) => removeBtn(todo)}
              >
                remove
              </button>
            </li>
          ))}
        </FlipMove>
      </ul>
    </div>
  );
};

export default TodoList;
