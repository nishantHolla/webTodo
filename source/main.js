
import Style from "./styles/style.scss"
import TodoManager from "./scripts/todoManager.js"
import UiManager from "./scripts/uiManager.js"

TodoManager.addCollection('collection A')
TodoManager.addTodo('task 1', 'description of task 1', 0)
TodoManager.addCollection('collection B')
TodoManager.addTodo('task 2', 'description of task 2', 0)
UiManager.makeUi(TodoManager.getDataBase())
