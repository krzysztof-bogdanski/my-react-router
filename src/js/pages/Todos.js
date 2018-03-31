import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class Todos extends React.Component
{   
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll(),
        }
        console.log("Todos constructor: ", this.state);
    }
    
    componentWillMount() {        
        TodoStore.on("change", this.getTodos);        
        console.log("componentWillMount count: ", TodoStore.listenerCount("change"));
    }

    componentWillUnmount() {
        TodoStore.removeListener("change", this.getTodos);
        console.log("componentWillUnmount count: ", TodoStore.listenerCount("change"));
    }

    getTodos() {
        console.log("Todos (getTodos)");
        this.setState({                
            todos: TodoStore.getAll(),
        })
    }

    createTodo() {
        var text = Date.now();
        TodoActions.createTodo(text);
    }
    
    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {              
       const {todos} = this.state;
       console.log("Todos render: ", todos);
       const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>;
        });        
        return (
            <div>
                <h1>Todos</h1>  
                <button class="btn btn-default" onClick={this.createTodo.bind(this)}>Create</button>     
                <button class="btn btn-default" onClick={this.reloadTodos.bind(this)}>Reload</button>  
                <hr />         
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}
