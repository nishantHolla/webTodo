
const TodoManager = new class {
    #dataBase = []

    #validateIndex(index) {
        if (index < 0 && Math.abs(index) < this.#dataBase.length + 1)
            return this.#dataBase.length + index

        else if (index >=0 && index < this.#dataBase.length)
            return index

        return undefined
    }

    addCollection(collectionName, index) {
        index = this.#validateIndex(index)
        if (index === undefined)
            index = this.#dataBase.length

        this.#dataBase.splice(index, 0, {
            name: collectionName,
            todos: [],
            expanded: true
        })

    }

    removeCollection(index) {
        index = this.#validateIndex(index)
        if (index === undefined)
            return

        this.#dataBase.splice(index, 1)
    }

    getCollection(index) {
        index = this.#validateIndex
        if (index === undefined)
            return

        return this.#dataBase[index]
    }

    logCollection(index) {
        index = this.#validateIndex(index)
        if (index === undefined)
            return

        console.log(this.#dataBase[index])
    }

}

export default TodoManager
