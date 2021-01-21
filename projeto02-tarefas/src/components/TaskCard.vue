<template>
  <div class="task-card" @click="toggleTaskStatus(task.taskName)" :class="{ 'task-item-done' : isDone}">
      <div class="task-item-pendent">
          {{ task.taskName }}
      </div>
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
        ...mapMutations(['toggleTaskStatus'])
    }
}
</script>

<style>
    .task-card {
		background-color: tomato;
        margin: 20px;
        padding: 20px;
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
</style>