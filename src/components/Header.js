import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';


export default class header extends Component {
  render() {
    return (
        <div id="header">
           <ReactTypingEffect
        text={["Hello Guyz!! Kaam Karlo..."]}
      />
        
      </div>
    )
  }
}
