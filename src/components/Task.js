import React, { Component } from "react";
import "./Task.css";

export default class Task extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  handleDelete = () => {
    console.log(this.props.task.id);

    this.props.deletetask(this.props.task.id);
  };

  handleDescription = () => {
    this.props.showmodal(this.props.task.title, this.props.task.description);
  };


  completed = (e) => {
    e.target.disabled = "true";
    console.log(this.myRef.current);
    this.myRef.current.style.background = "#77ce7e";
    this.myRef.current.style.textDecoration = "line-through";

    this.props.completed();
  };

  render() {
    const { task } = this.props;

    return (
      <div id="taskbox" ref={this.myRef}>
        <input type="checkbox" onClick={this.completed} disabled={false}  title="completed?"/>

        <span title="Tap me for description" onClick={this.handleDescription}>{task.title}</span>

        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
}
