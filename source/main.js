
import Style from "./styles/style.scss"
import TodoManager from "./scripts/todoManager.js"

TodoManager.addCollection('collection A')
TodoManager.addCollection('collection B')
TodoManager.removeCollection(1)
TodoManager.logCollection(0)
