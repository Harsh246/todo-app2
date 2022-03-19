import React, { Component } from 'react'
import './counter.css';

export default class counter extends Component {

 
  render() {
    const { tasks,  completed } = this.props;
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
    <td>{tasks.length-completed}</td>
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
