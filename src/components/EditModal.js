import React, { Component } from 'react';
import './EditModal.css';

export default class EditModal extends Component { 
    
    
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
 submitIt=()=>
        {

            if(this.state.title&&this.state.desc){
            this.props.handleEdit(this.props.id, {
                title:this.state.title,
                desc:this.state.desc
            });
            this.props.close();}
            else{
                window.alert("please enter all the required fields");
            }
        }
      // this is taking title , description and close function as props.
      render() {

       

 
        return (
          // click anywhere outside main modal dailog to close modal. this id as modal is used to set background color.
        <div
          id="modal"
          onClick={(e) => {
            e.stopPropagation();
            return this.props.close();
          }}
        >
          <div
            id="dailog"
            onClick={(e) => {
              e.stopPropagation(); //had to stop event capturing
            }}
          >
            <div
              id="close"
              title="close"
              onClick={() => {
                return this.props.close();
              }}
            >
              <p>✖</p>
            </div>
  
            <div id="modalheader" className="displaycenter">
             Edit your Task Details
            </div>
            <div id="content" className="displaycenter">
              <div id="edit-box">

            <input
              type="text"
              name="title"
              autoComplete="none"
              id="title"
              value={this.state.title}
              placeholder="ADD TITLE"
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="desc"
              id="desc"
              autoComplete="none"
              value={this.state.desc}
              placeholder="ADD DESCRIPTION"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="button" onClick={this.submitIt}>
              Edit task
            </button>
          </div>
        </div>
            </div>
          </div>

      );
    }
}
