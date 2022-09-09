/*import React from 'react'

export default function Button(props) {
  return (
    <div>
    <h2> Button Component</h2>    
    <button>{props.title}</button>
    </div>
  )
}
*/

//state
import React, {Component} from 'react';

export default class Button extends Component {
  state = {
    title:'Button state',
  };
  render() {
    return (
      <div>
        <button>{this.state.title}</button>
      </div>
    );
  }
}
