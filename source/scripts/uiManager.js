
const UiManager = new class {

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
    }

    makeUi(dataBase) {
        const DOM_MAIN = document.querySelector('main')

        console.log(dataBase)
        dataBase.forEach(collection => {
            this.makeCollection(collection, DOM_MAIN)
        })

    }

}

export default UiManager
