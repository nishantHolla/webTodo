
import TodoManager from "./todoManager.js"
import Todomanager from "./todoManager.js"

const UiManager = new class {

    makeThemeSwitcher() {
        const DOM_ROOT = document.querySelector('html')
        DOM_ROOT.dataset.theme = 'light'

        const DOM_HEADER = document.querySelector('header')
        const THEME_ICON = document.createElement('span')
        THEME_ICON.classList.add('material-symbols-outlined', 'theme-icon', 'pointer', 'flex-center')
        THEME_ICON.innerText = 'dark_mode'

        THEME_ICON.addEventListener('click', () => {
            if (THEME_ICON.innerText == 'dark_mode') {
                THEME_ICON.innerText = 'light_mode'
                DOM_ROOT.dataset.theme = 'dark'
            }

            else {
                THEME_ICON.innerText = 'dark_mode'
                DOM_ROOT.dataset.theme = 'light'
            }
        })

        DOM_HEADER.appendChild(THEME_ICON)
    }

    makeTodoCheckbox(DOM_TARGET, todo) {
        const DOM_CHECKBOX = document.createElement('input')
        DOM_CHECKBOX.type = 'checkbox'

        DOM_CHECKBOX.addEventListener('change', () => {
            if (DOM_CHECKBOX.checked) {
                DOM_TARGET.classList.add('strike-through')
                todo.done = true
            }
            else {
                DOM_TARGET.classList.remove('strike-through')
                todo.done = false
            }
        })

        return DOM_CHECKBOX
    }

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

        DOM_TODO_HEADER.appendChild(this.makeTodoCheckbox(DOM_TODO_CONTAINER, todo))
        DOM_TODO_HEADER.appendChild(DOM_TODO_TITLE)

        DOM_TODO_CONTAINER.appendChild(DOM_TODO_HEADER)
        DOM_TODO_CONTAINER.appendChild(DOM_TODO_MESSAGE)

        DOM_TARGET.appendChild(DOM_TODO_CONTAINER)
        return DOM_TODO_CONTAINER
    }

    makeCollectionExpand(DOM_TARGET, DOM_LIST, collection) {
        const DOM_EXPANDER = document.createElement('span')
        DOM_EXPANDER.classList.add('material-symbols-outlined', 'collection-expand-icon', 'pointer', 'flex-center')
        DOM_EXPANDER.innerText = collection.expanded ? 'expand_more' : 'expand_less'

        DOM_EXPANDER.addEventListener('click', () => {
            if (DOM_EXPANDER.innerText === 'expand_more') {
                DOM_EXPANDER.innerText = 'expand_less'
                DOM_LIST.classList.add('collection-list-hidden')
                DOM_LIST.classList.remove('collection-list-visible')
                collection.expanded = false
            }

            else {
                DOM_EXPANDER.innerText = 'expand_more'
                DOM_LIST.classList.remove('collection-list-hidden')
                DOM_LIST.classList.add('collection-list-visible')
                collection.expanded = true
            }

        })

        DOM_TARGET.appendChild(DOM_EXPANDER)
    }

    makeAddCollectionButton(DOM_TARGET) {
        const DOM_ADD_BUTTON = document.createElement('div')
        DOM_ADD_BUTTON.innerText = 'add'
        DOM_ADD_BUTTON.classList.add(
            'new-collection-icon', 'pointer', 'collection-container',
            'flex-center', 'material-symbols-outlined'
        )

        DOM_ADD_BUTTON.addEventListener('click', () => {
            TodoManager.addCollection('New collection')
            this.makeCollection(TodoManager.getCollection(-1), DOM_TARGET, DOM_ADD_BUTTON)
        })

        return DOM_ADD_BUTTON
    }

    makeCollection(collection, DOM_TARGET, DOM_SIBLING) {
        const DOM_COLLECTION_CONTAINER = document.createElement('div')
        DOM_COLLECTION_CONTAINER.classList.add('collection-container')

        const DOM_COLLECTION_HEADER = document.createElement('div')
        DOM_COLLECTION_HEADER.classList.add('collection-header')

        const DOM_COLLECTION_HEADING = document.createElement('h2')
        DOM_COLLECTION_HEADING.classList.add('collection-heading')
        DOM_COLLECTION_HEADING.innerText = collection.name

        const DOM_COLLECTION_LIST = document.createElement('div')
        DOM_COLLECTION_LIST.classList.add('collection-list')
        if (collection.expanded)
            DOM_COLLECTION_LIST.classList.add('collection-list-visible')
        else
            DOM_COLLECTION_LIST.classList.add('collection-list-hidden')

        this.makeCollectionExpand(DOM_COLLECTION_HEADER, DOM_COLLECTION_LIST, collection)
        DOM_COLLECTION_HEADER.appendChild(DOM_COLLECTION_HEADING)

        DOM_COLLECTION_CONTAINER.appendChild(DOM_COLLECTION_HEADER)
        DOM_COLLECTION_CONTAINER.appendChild(DOM_COLLECTION_LIST)

        DOM_TARGET.insertBefore(DOM_COLLECTION_CONTAINER, DOM_SIBLING)
        return DOM_COLLECTION_CONTAINER
    }

    makeUi(dataBase) {
        const DOM_MAIN = document.querySelector('main')
        const DOM_ADD_COLLECTION_BUTTON = this.makeAddCollectionButton(DOM_MAIN)
        DOM_MAIN.appendChild(DOM_ADD_COLLECTION_BUTTON)

        dataBase.forEach(collection => {
            const DOM_COLLECTION_CONTAINER = this.makeCollection(collection, DOM_MAIN, DOM_ADD_COLLECTION_BUTTON)

            collection.todos.forEach(todo => {
                const DOM_COLLECTION_LIST = DOM_COLLECTION_CONTAINER.querySelector('.collection-list')
                const DOM_TODO_CONTAINER = this.makeTodo(todo, DOM_COLLECTION_LIST)
            })
        })


    }

}

export default UiManager
