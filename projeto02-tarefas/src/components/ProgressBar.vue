<template>
  <div id="progress-bar">
        <div id="progress-bar-done" :style="{ width: getPercentage + '%'}">
            {{ getPercentage }}%
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {        
        ...mapState(['taskListToDo']),
        getPercentage () {
            const totalOfTasks = this.taskListToDo.length
            const tasksDone = this.taskListToDo.filter(task => task.status === 'done').length
            if (totalOfTasks > 0) {
                return (tasksDone * 100) / totalOfTasks
            }
            
            return 0
        }
    }
}
</script>

<style>
    #progress-bar {
        color: white;
        width: 80%;
        text-align: center;
        border: 1px solid white;
        border-radius: 5px;
    }
    #progress-bar-done {
        display: flex;
        justify-content: center;
        height: 100%;
        background-color: limegreen;
    }
</style>