import React, { Component } from 'react'
import uuid from 'uuid/v4';

class NewTodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task:""
        }
        this.changeHandler= this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    changeHandler (event){
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    submitHandler(event){
        event.preventDefault();
        this.props.createTodo({...this.state, id: uuid(), completed: false});
        this.setState({
            task:""
        });
    }

    render() {
        return (
            <form onSubmit = {this.submitHandler}>
                <div>
                
                <input 
                type = 'text'
                placeholder = 'new Todo'
                name='task'
                id = 'task'
                value ={this.state.task}
                onChange = {this.changeHandler}
                />
                <button><i className = 'fa fa-plus'></i></button>
                
                </div>
                
            </form>
        )
    }
}

export default NewTodoForm