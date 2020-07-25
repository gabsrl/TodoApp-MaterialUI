export const AddTodoAction = (newTodo) => ({
    type: 'ADD_TODO',
    payload: {
        newTodo,
    },
});


export const EditTodoAction = (todoModified) => ({
    type: 'EDIT_TODO',
    payload: {
        todoModified,
    }
})

