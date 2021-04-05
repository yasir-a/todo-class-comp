import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      task: this.props.task,
    };
  }

  toggleEdit = () => {
    this.setState((prevState) => {
      return {
        isEditing: !prevState.isEditing,
      };
    });
  };

  handleOnChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleOnUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  render() {
    console.log("isEditing", this.state.isEditing);
    return (
      <div className="todo">
        <div className="todo-text">
          {this.state.isEditing ? (
            <form onSubmit={this.handleOnUpdate}>
              <input
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.handleOnChange}
              />
              <button type="submit">Update</button>
            </form>
          ) : (
            <li
              className={this.props.completed ? "completed" : ""}
              onClick={() => this.props.todoCompletion(this.props.id)}
            >
              {this.props.task}
            </li>
          )}
        </div>
        <div className="btn-group">
          <button className="btn-edit" onClick={this.toggleEdit}>
            Edit
          </button>
          <button
            className="btn-del"
            onClick={() => this.props.removeTodo(this.props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
