import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    constructor(props){
    super(props);
    this.state = {
        isEditing: false,
        task:this.props.task
        
    }
    this.removeHandler = this.removeHandler.bind(this);
    this.formToggler = this.formToggler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);

    }
    removeHandler(){
        this.props.removeTodo(this.props.id);
    }
    formToggler() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    submitHandler(event){
        event.preventDefault();
        this.props.updatedtodo(this.props.id, this.state.task);
        this.setState({isEditing:false})
    }
    changeHandler (event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    toggleHandler(event) {
        this.props.toggleTodo(this.props.id)

    }
    render() {
        let outcome;
        if(this.state.isEditing){
            outcome = (
                <div className ='Todo'>
                    <form onSubmit = {this.submitHandler}>
                        <input 
                        type = "text" 
                        name = "task"
                        value = {this.state.task} 
                        onChange = {this.changeHandler}
                        placeholder = 'Edit' />
                        <div className = 'Todo-button'><button><i className = 'fa fa-plus'></i></button>
</div>
                        
                    </form>
                </div>
            );

        } else {
            outcome = (
                <div className='Todo'>
              <li className = {this.props.completed ? "Todo-task completed" : "Todo-task"} > 
                     {this.props.task}</li>
                     <button onClick = {this.formToggler}>
                         <i className = 'fa fa-pencil'></i>
                     </button>
                <button onClick = {this.removeHandler}>
                <div className = 'Todo-button'><i className = 'fa fa-trash'></i></div>
                </button>
                
            </div>
            );
        }
        return outcome;
    }
}

export default Todo;