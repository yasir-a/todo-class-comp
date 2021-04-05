import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  createNewTodo = (newTask) => {
    this.setState({
      todos: [...this.state.todos, newTask],
    });
  };

  removeTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  updateTodo = (id, updatedTask) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos,
    });
  };

  todoCompletion = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <NewTodoForm createNewTodo={this.createNewTodo} />
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          updateTodo={this.updateTodo}
          todoCompletion={this.todoCompletion}
        />
      </div>
    );
  }
}

export default App;
