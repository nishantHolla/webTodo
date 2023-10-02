
import Style from "./styles/style.scss"
import TodoManager from "./scripts/todoManager.js"

TodoManager.addCollection('collection A')
TodoManager.addCollection('collection B')
TodoManager.removeCollection(1)

TodoManager.addTodo('task 1', 'description of task 1', 0)
TodoManager.addTodo('task 2', 'description of task 2', 0)
TodoManager.removeTodo(0, 0)
TodoManager.logTodo(0, 0)
TodoManager.log()
