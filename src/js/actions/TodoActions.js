import dispatcher from "../dispatcher";

export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodos() {
    dispatcher.dispatch({
        type: "FETCH_TODOS"
    });
    
    setTimeout( () => {
        dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
            {
                id: 12331231,
                text: "First action 2 reload",
                complete: true
            },
            {
                id: 111231,
                text: "Second action 2 reload",
                complete: true
            },
        ]});        
    }, 1000);    
}