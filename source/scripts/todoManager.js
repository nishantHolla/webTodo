
const TodoManager = new class {
    #dataBase = []

    #validateIndex(index, length) {
        if (index < 0 && Math.abs(index) < length + 1)
            return length + index

        else if (index >=0 && index < length)
            return index

        return undefined
    }

    addCollection(collectionName, index) {
        index = this.#validateIndex(index, this.#dataBase.length)
        if (index === undefined)
            index = this.#dataBase.length

        this.#dataBase.splice(index, 0, {
            name: collectionName,
            todos: [],
            expanded: false
        })

    }

    removeCollection(index) {
        index = this.#validateIndex(index, this.#dataBase.length)
        if (index === undefined)
            return

        this.#dataBase.splice(index, 1)
    }

    getCollection(index) {
        index = this.#validateIndex(index, this.#dataBase.length)
        if (index === undefined)
            return

        return this.#dataBase[index]
    }

    logCollection(index) {
        index = this.#validateIndex(index, this.#dataBase.length)
        if (index === undefined)
            return

        console.log(this.#dataBase[index])
    }

    addTodo(title, message, collectionIndex, index) {
        collectionIndex = this.#validateIndex(collectionIndex, this.#dataBase.length)
        if (collectionIndex === undefined)
            return

        const collection = this.getCollection(collectionIndex)
        index = this.#validateIndex(index, collection.todos.length)
        if (index === undefined)
            index = collection.todos.length

        collection.todos.splice(index, 0, {
            title,
            message,
            done: false
        })
    }

    removeTodo(collectionIndex, index) {
        collectionIndex = this.#validateIndex(collectionIndex, this.#dataBase.length)
        if (collectionIndex === undefined)
            return

        const collection = this.getCollection(collectionIndex)
        index = this.#validateIndex(index, collection.todos.length)
        if (index === undefined)
            return

        collection.todos.splice(index, 1)
    }

    getTodo(collectionIndex, index) {
        collectionIndex = this.#validateIndex(collectionIndex, this.#dataBase.length)
        if (collectionIndex === undefined)
            return

        const collection = this.getCollection(collectionIndex)
        index = this.#validateIndex(index, collection.todos.length)
        if (index === undefined)
            return

        return collection.todos[index]
    }

    logTodo(collectionIndex, index) {
        const todo = this.getTodo(collectionIndex, index)
        if (todo)
            console.log(todo)
    }

    log() {
        console.log(this.#dataBase)
    }

    getDataBase() {
        return this.#dataBase
    }
}

export default TodoManager
