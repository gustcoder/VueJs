<template>
    <div class="task-list" v-if="taskListToDo.length > 0">
        <task-card v-for="(task, key) in taskListToDo" :task=task :key="key" />
    </div>
    <span v-else>Sua vida está em dia :)</span>
</template>

<script>
import { mapState } from 'vuex'
import TaskCard from './TaskCard.vue'

export default {
  components: { TaskCard },
    computed: {
        ...mapState(['taskListToDo'])
    }
}
</script>

<style>
    .task-list {
        display: flex;
    }
</style>