// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addTodo = (title) => {
    return {
        type:'AddTodo',
        payload: {
          ...title,
          status: 'Todo',
          id: todoId++,
        }
    }
}

export const removeTodo = (nro) => {
    return {
        type:'RemoveTodo',
        payload: nro,
    }
}

export const toInProgress = (nro) => {
    return {
        type:'ToInProgress',
        payload: nro,
    }
}

export const toDone = (nro) => {
    return {
        type:'ToDone',
        payload: nro,
    }
}