import React, { Component } from 'react';
import Todo from './Todo.js'
import NewTodoForm from './newTodoForm'
import './App.css';
import './TodoList.css';


class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: []};
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.complete = this.complete.bind(this);
    }
    create (newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        });
    
    }
    remove(id){
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    update(id,newTask) {
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: newTask}
            } else{
                return todo;
            }
        })
        this.setState({
            todos: newTodos
        })
    }
    complete(id){
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: !todo.completed}
            } else{
                return todo;
            }
        })
        this.setState({
            todos: newTodos
        })
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo 
            key = {todo.id}
            id ={todo.id}
            completed = {todo.completed}                  
            task = {todo.task}
            removeTodo = {this.remove}
            updatedtodo = {this.update}
            toggleTodo = {this.complete}
               />
        })
        return (
            
            <div className = 'TodoList'>
                <h1>TodoList App <span>A simple React Todo List App</span></h1>
                <ul>
                    
                   {todos}
                   <NewTodoForm createTodo = {this.create}/>
                </ul>
                
            </div>
        );
    }
}

export default Todolist;