import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        taskListToDo: [],
        taskExists: {
            name: '',
            exists: false
        }
    },

    mutations: {
        setTaskListToDo (state, payload) {
            state.taskListToDo = payload
        },
        addTaskToList (state, payload) {
            state.taskExists.exists = false
            const newTask = state.taskListToDo.filter(tasks => tasks.taskName === payload.taskName)

            if (newTask.length > 0) {
                state.taskExists = {
                    name: payload.taskName,
                    exists: true
                }
            }
            else {
                state.taskListToDo.push(payload)
                localStorage.setItem('tasks', JSON.stringify(state.taskListToDo))
            }
        },
        setNewTaskList (state, payload) {
            state.taskListToDo = payload
        },
        toggleTaskStatus (state, payload) {
            const findTask = state.taskListToDo.filter(task => (task.taskName === payload))
            findTask[0].status === 'pendent' ? findTask[0].status = 'done' : findTask[0].status = 'pendent'
            localStorage.setItem('tasks', JSON.stringify(state.taskListToDo))
        }
    }
})