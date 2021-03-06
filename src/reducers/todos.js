
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: Math.random(),
                    text: action.text,
                    date: new Date().toString(),
                    completed: false
                },
                ...state
            ]
        case 'TOGGLE_TODO':
            state = state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
            let completed_todos=state.filter(todo => (!todo.completed)).
            sort((a,b) => new Date(b.date) - new Date(a.date))
            let incomplete_todos=state.filter(todo => (todo.completed)).
            sort((a,b) => new Date(b.date) - new Date(a.date))
            return completed_todos.concat(incomplete_todos)
        case 'REMOVE_TODO':
            return state.filter(todo => (todo.id !== action.id))
        case 'CLEAR_LIST':
            return []
        case 'CLEAR_COMPLETED':
            return state.filter(todo => (!todo.completed ))
        default:
            return state
    }
}

export default todos
