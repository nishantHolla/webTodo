
import Style from "./styles/style.scss"
import TodoManager from "./scripts/todoManager.js"
import UiManager from "./scripts/uiManager.js"

TodoManager.addCollection('collection A')
TodoManager.addCollection('collection B')
UiManager.makeUi(TodoManager.getDataBase())
