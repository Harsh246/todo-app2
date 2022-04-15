import React, { Component } from 'react'
import './counter.css';

export default class counter extends Component {

 
  render() {

    const { tasks } = this.props;
    console.log(tasks);
    let completed = 0;

    let completedTask = [];
    let pending=0;
    completedTask = tasks.filter((item)=>item.completed==true);
    console.log(completedTask);
  if(completedTask.length){
    completed = completedTask.length;
 
}
   pending = tasks.length - completed;
  


    return (
        <div id="counter">
            
            <table>

                <tbody>
                    <tr>
    <td>Total Tasks:</td>
    <td>{tasks.length}</td>
  </tr>
  <tr>
    <td>Tasks Pending:</td>
    <td>{pending}</td>
  </tr>
  <tr>
    <td>Tasks Completed:</td>
              <td>{completed}</td>
  </tr>
</tbody>
</table>
                  </div>
    )
  }
}
