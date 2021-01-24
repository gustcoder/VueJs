import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        taskListToDo: []
    },

    mutations: {
        addTaskToList (state, payload) {
            if (!state.taskListToDo.includes(payload)) {
                state.taskListToDo.push(payload)
            }
        },
        setNewTaskList (state, payload) {
            state.taskListToDo = payload
        },
        toggleTaskStatus (state, payload) {
            const findTask = state.taskListToDo.filter(task => (task.taskName === payload))
            findTask[0].status === 'pendent' ? findTask[0].status = 'done' : findTask[0].status = 'pendent'
        }
    }
})