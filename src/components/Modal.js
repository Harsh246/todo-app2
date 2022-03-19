import React, { Component } from "react";

import "./Modal.css";

export default class Modal extends Component {

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
           {this.props.title}
          </div>
          <div id="content" className="displaycenter">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
