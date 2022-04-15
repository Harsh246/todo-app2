import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Modal from "./components/Modal.js";
import Counter from "./components/Counter";
import EditModal from "./components/EditModal";

export default class App extends Component {
  //state consist of two properties:-  1) array of tasks object  2) modal parameters and show
  constructor() {
    super();
    this.state = {
      tasks: [],
      modal: {
        show: false,
        title: "ye sab doglapan hai",
        description: "Bhai kya kar raha hai tu",
      },
      edit: {
        show: false,
        id:0,
        updated:''
      }
    };
  }
  // add task to the state by passing this func as props to child having title and description as arguments.
  // also generating a token num as an id for each task
  addTask = (t, d) => {
    const rand = () => {
      return Math.random().toString(36).substr(2);
    };

    const token = () => {
      return rand() + rand();
    };

    var tno = token();

    var newTask = this.state.tasks;
    newTask.push({
      title: t,
      description: d,
      id: tno,
      completed: false,
    });

    this.setState({
      ...this.state,
      tasks: newTask,
    });
    console.log("inside add task");
    console.log(this.state);
  };
  // delete task by getting id as argument
  deleteTask = (id) => {
    console.log("inside delete");
    console.log(id);
    var newTasks = this.state.tasks.filter((item) => item.id != id);
    console.log(newTasks);

    this.setState({ ...this.state, tasks: newTasks }, () => {
      console.log(this.state);
    });
  };

  // setting state modal object's title and description keys
  showModal = (title, description) => {
    this.setState({
      ...this.state,
      modal: {
        show: true,
        title,
        description,
      },
    });
  };
  // passing this an a prop to Modal component.
  closeModal = () => {
    this.setState({
      ...this.state,
      modal: {
        show: false,
        title: "",
        description: "",
      },
    });
  };

  // count the number of completed tasks to show pending ones.

  completedtask = (id) => {
    var newTasks = this.state.tasks.map((item) => {
      if (item.id == id)
      item.completed = true;

      return item;
    });

    this.setState({
      ...this.state,
      tasks: newTasks,
    });
  };


  handleEdit=(id, obj)=>
  {
     const updatedTasks = this.state.tasks.map((item)=>
     {
       if(item.id==id)
       {
         item.title = obj.title;
         item.description = obj.desc;
       }
       return item;
     });


     this.setState({
       ...this.state,
       tasks: updatedTasks
     });
  };


showEdit = (id) => {
  console.log("inside edit");
  this.setState({
    ...this.state,
    edit: {
      show: true,
      id,
      updated:"",
    }, 
  });
};
// passing this an a prop to Modal component.
closeEdit = () => {
  this.setState({
    ...this.state,
    edit: {
      show: false,
      id: 0,
      updated: "",
    },
  });
};




  render() {
    const { tasks, modal, edit } = this.state;

    return (
      <div>
        <Header />

        {/*  conditional rendering of modal based on state. */}

        {modal.show ? (
          <Modal
            title={modal.title}
            description={modal.description}
            close={this.closeModal}
          />
        ) : null}

        {edit.show && <EditModal id={edit.id} updated={edit.updated} close={this.closeEdit} handleEdit={this.handleEdit}/>}




        <Counter tasks={tasks} />
        <div id="main">
          {/* // left gif image */}
          <div id="left">
            <div id="background"> </div>
          </div>
          {/* // right overlapping section */}
          <div id="container">
            <Container
              tasks={tasks}
              addtask={this.addTask}
              deletetask={this.deleteTask}
              showModal={this.showModal}
              completed={this.completedtask}
              showEdit={this.showEdit}
              
            />
          </div>
        </div>
      </div>
    );
  }
}
