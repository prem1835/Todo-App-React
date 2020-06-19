import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
  }
  componentDidMount() {
    const todoList = localStorage.getItem("todoList");
    this.setState(() => ({ todoList: JSON.parse(todoList) }));
  }
  componentDidUpdate(preProps, preState) {
    if (preState.todoList.length !== this.state.todoList) {
      const json = JSON.stringify(this.state.todoList);
      localStorage.setItem("todoList", json);
    }
  }
  HandleAddTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.AddTodo.value.trim();
    if (!todo || this.state.todoList.indexOf(todo) > -1) {
      return "Please add valid todo";
    }
    this.setState((preState) => ({
      todoList: preState.todoList.concat(todo),
    }));
    e.target.elements.AddTodo.value = "";
  };

  HandleRemove = (todoId) => {
    this.setState((preState) => ({
      todoList: preState.todoList.filter((todo) => todo !== todoId),
    }));
  };
  render() {
    return (
      <div className="max-w-md mx-auto">
        <form
          className="w-full flex justify-center mb-2"
          onSubmit={this.HandleAddTodo}
        >
          <div className="flex border-b border-b-2 border-blue-500 py-2">
            <input
              className="appearance-none w-full text-gray-700 mr-3 py-2 px-2 leading-tight rounded"
              type="text"
              placeholder="Enter task"
              name="AddTodo"
            />
            <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
              Add Todo
            </button>
          </div>
        </form>
        <TodoList
          todoList={this.state.todoList}
          removeBtn={this.HandleRemove}
        />
      </div>
    );
  }
}

export default App;
