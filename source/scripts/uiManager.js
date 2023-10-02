
const UiManager = new class {

    makeTodo(todo, DOM_TARGET) {
        const DOM_TODO_CONTAINER = document.createElement('div')
        DOM_TODO_CONTAINER.classList.add('todo-container')

        const DOM_TODO_HEADER = document.createElement('div')
        DOM_TODO_HEADER.classList.add('todo-header')

        const DOM_TODO_TITLE = document.createElement('h3')
        DOM_TODO_TITLE.classList.add('todo-heading')
        DOM_TODO_TITLE.innerText = todo.title

        const DOM_TODO_MESSAGE = document.createElement('p')
        DOM_TODO_MESSAGE.classList.add('todo-message')
        DOM_TODO_MESSAGE.innerText = todo.message

        DOM_TODO_HEADER.appendChild(DOM_TODO_TITLE)

        DOM_TODO_CONTAINER.appendChild(DOM_TODO_HEADER)
        DOM_TODO_CONTAINER.appendChild(DOM_TODO_MESSAGE)

        DOM_TARGET.appendChild(DOM_TODO_CONTAINER)
        return DOM_TODO_CONTAINER
    }

    makeCollection(collection, DOM_TARGET) {
        const DOM_COLLECTION_CONTAINER = document.createElement('div')
        DOM_COLLECTION_CONTAINER.classList.add('collection-container')

        const DOM_COLLECTION_HEADER = document.createElement('div')
        DOM_COLLECTION_HEADER.classList.add('collection-header')

        const DOM_COLLECTION_HEADING = document.createElement('h2')
        DOM_COLLECTION_HEADING.classList.add('collection-heading')
        DOM_COLLECTION_HEADING.innerText = collection.name

        const DOM_COLLECTION_LIST = document.createElement('div')
        DOM_COLLECTION_LIST.classList.add('collection-list')

        DOM_COLLECTION_HEADER.appendChild(DOM_COLLECTION_HEADING)

        DOM_COLLECTION_CONTAINER.appendChild(DOM_COLLECTION_HEADER)
        DOM_COLLECTION_CONTAINER.appendChild(DOM_COLLECTION_LIST)

        DOM_TARGET.appendChild(DOM_COLLECTION_CONTAINER)
        return DOM_COLLECTION_CONTAINER
    }

    makeUi(dataBase) {
        const DOM_MAIN = document.querySelector('main')

        dataBase.forEach(collection => {
            const DOM_COLLECTION_CONTAINER = this.makeCollection(collection, DOM_MAIN)

            collection.todos.forEach(todo => {
                const DOM_TODO_CONTAINER = this.makeTodo(todo, DOM_COLLECTION_CONTAINER)
            })
        })

    }

}

export default UiManager
