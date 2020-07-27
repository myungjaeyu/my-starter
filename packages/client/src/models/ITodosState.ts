interface ITodosState {
    todos: string[]
    add: (todo: string) => void
    remove: (index: number) => void
}

export default ITodosState
