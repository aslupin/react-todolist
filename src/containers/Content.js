import React, { Component } from 'react';

class Content extends Component {
    render(){
        return(
            
        <div className="content">
            <input className='todo-input' type="text" onChange={this.props.onInputText} value={this.props.text}/>
            <button className='todo-btn' onClick = {this.props.addTodo} > + </button>
        </div>
        );
    }
}
export default Content;