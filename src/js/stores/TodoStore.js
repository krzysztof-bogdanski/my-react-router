import { EventEmitter} from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();
        this.todos = [
            {
                id: 1231231231231,
                text: "First action",
                complete: false
            },
            {
                id: 2234431231231,
                text: "Second action",
                complete: true
            },
        ];
    }

    getAll() {
        console.log("TodoStore (getAll): ", this.todos);
        return this.todos;
    }

    createTodo(text) {
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete: false,
        });

        
    }
    
    //Actions for dispatcher
    handleActions(action) {
        console.log("TodoStore received an action", action);
        switch(action.type) {
            case "CREATE_TODO": {
                console.log("handleActions -> CREATE_TODO")
                this.createTodo(action.text);
                this.emit("change");
                break;
            }            
            case "RECEIVE_TODOS": {
                console.log("handleActions -> RECEIVE_TODOS")
                this.todos = action.todos;
                this.emit("change");
                break;
            }
            
        }
    }
}

const todoStore = new TodoStore;

//dispatcher
dispatcher.register(todoStore.handleActions.bind(todoStore));

//uncoment for tests
//window.todoStore = todoStore;
//window.dispatcher = dispatcher;

export default todoStore;