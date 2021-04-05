import React, { Component } from "react";
import Todo from "./Todo";

export class TodoList extends Component {
  renderTodosTasks = () => {
    const todos = this.props.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.props.removeTodo}
          updateTodo={this.props.updateTodo}
          todoCompletion={this.props.todoCompletion}
        />
      );
    });
    return todos;
  };

  render() {
    return (
      <div>
        <ul>{this.renderTodosTasks()}</ul>
      </div>
    );
  }
}

export default TodoList;
