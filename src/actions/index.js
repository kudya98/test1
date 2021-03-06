
export const addTodo = text => ({
  type: 'ADD_TODO',
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
})

export const clearList = () => ({
    type: 'CLEAR_LIST'
})

export const clearCompleted = () => ({
    type: 'CLEAR_COMPLETED'
})