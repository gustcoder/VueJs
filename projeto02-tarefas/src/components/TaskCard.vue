<template>
  <div class="task-card" :class="{ 'task-item-done' : isDone}">
      <div class="task-item-pendent" @click="toggleTaskStatus(task.taskName)">
          {{ task.taskName }}
      </div>
      <span class="close-card" title="Excluir tarefa" @click="closeCard(task.taskName)">x</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    props: {
        task: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            status: 'pendent'
        }
    },
    computed: {
        ...mapState(['taskListToDo']),
        isDone () {
            const findTask = this.taskListToDo.filter(list => (list.taskName === this.task.taskName))
            return findTask[0].status === 'done'
        }
    },
    methods: {
        ...mapMutations(['toggleTaskStatus', 'setNewTaskList']),
        closeCard (taskName) {
            const taskListWithRemovedItem = this.taskListToDo.filter(list => (list.taskName !== taskName))
            this.setNewTaskList(taskListWithRemovedItem)
            localStorage.setItem('tasks', JSON.stringify(taskListWithRemovedItem))
        }
    }
}
</script>

<style>
    .task-card {
        display: flex;
        justify-content: flex-end;
		background-color: tomato;
        margin: 20px;
        padding: 20px;
        width: 180px;
        height: 40px;
		border-radius: 5px;
        cursor: pointer;
    }

    .task-item {
        width: 120px;
        height: 100%;
    }

    .task-item-done {
        background-color: mediumseagreen;
    }   

    .task-item-pendent {
        width: 100%;
        height: 100%;
    }

    .close-card {
        display: flex;
        text-align: right;
        width: 50px;
    }
</style>