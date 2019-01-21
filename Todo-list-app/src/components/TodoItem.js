import React, { Component } from 'react'
import Proptypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () =>
  {
      return {
          background: '#f4f4f4',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none',
          borderBottom: '1px #ccc dotted',
          padding: '10px'
      }
  }

  
    render() {
    const {id, title} = this.props.todo; //destructuring, instead of always using this.props.todo just put title or id
    return (
      <div style={this.getStyle()}>
      <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
      </p>
        
      </div>
    )
  }
}

//Prop Types
TodoItem.Proptypes =
{
  todo: Proptypes.object.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired
}


const btnStyle =
{
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
