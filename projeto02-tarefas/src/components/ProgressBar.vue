<template>
  <div id="tasks-progress">
        <span id="progress-bar-done" >{{ getPercentage }}%</span>
        <div id="progress-bar" :style="{ width: getPercentage + '%'}"></div>
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
                return Math.round((tasksDone * 100) / totalOfTasks) || 0
            }
            
            return 0
        }
    }
}
</script>

<style>
    #tasks-progress {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        width: 80%;
        border: 1px solid white;
        border-radius: 5px;
    }
    #progress-bar {    
        align-self: flex-start;    
        height: 100%;
        position: absolute;
        background-color: limegreen;
    }
    #progress-bar-done {
        z-index: 1;
    }
</style>