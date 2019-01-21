import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types';

class Todos extends Component {


  render() {
      return this.props.todos.map((todo)=>
      (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} //key gives unique id for each item 
        delTodo={this.props.delTodo} /> 
      ));                                       
  }
}

//Prop Types
Todos.Proptypes =
{
  todos: Proptypes.array.isRequired,
  markComplete: Proptypes.func.isRequired,
  delTodo: Proptypes.func.isRequired
}


export default Todos;
