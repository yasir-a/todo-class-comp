import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";
export class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  handleOnChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.createNewTodo({ ...this.state, id: uuidv4(), completed: false });
    this.setState({ task: "" });
  };
  render() {
    console.log(this.state.task);
    return (
      <div className="new-todo-form">
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="task"></label>
          <input
            name="task"
            type="text"
            value={this.state.task}
            id="task"
            onChange={this.handleOnChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
