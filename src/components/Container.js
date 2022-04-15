import React, { Component } from "react";
import "./Container.css";
import Task from "./Task";
//import swal from '@sweetalert/with-react';   // used sweetalert instead of alert //not working

export default class Container extends Component {

  // state used to manage inputs 
  state = {
    title: "",
    desc: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  // check the inputs and trigger addtask function
  addtask = () => {
    if(this.state.title && this.state.desc)
    {
      this.props.addtask(this.state.title, this.state.desc);
   
      this.setState({ title: "", desc: "" });
    }
    else {
      // swal( <div>
      //   <h1>Oops!</h1>
      //   <h3>
      //     Fields can't be empty!
      //   </h3>
      // </div>);
      alert("Oops!!  Fields can't be empty!");
    }
  };

  render() {
    const { tasks } = this.props;

    return (
      <div id="box">
        <div id="form">
          <div id="inputs">
            <input
              type="text"
              name="title"
              autoComplete="none"
              id="title"
              value={this.state.title}
              placeholder="ADD TITLE"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="desc"
              id="desc"
              autoComplete="none"
              value={this.state.desc}
              placeholder="ADD DESCRIPTION"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="button" onClick={this.addtask}>
              Add task
            </button>
          </div>
        </div>
        {/* scrollabe div */}
       
        <div id="list">
          <ol> {tasks.map((item) => {
            return (
              <li key={item.id}>
                <Task 
                 
                task={item}
                deletetask={this.props.deletetask}
                  showmodal={this.props.showModal}
                  completed={this.props.completed}
                  showEdit = {this.props.showEdit}
              /></li>
            );
          })}
         </ol>  </div>
         
      </div>
    );
  }
}
