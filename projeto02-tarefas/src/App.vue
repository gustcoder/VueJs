<template>
	<div id="app">
		<h1>Tarefas</h1>
		<progress-bar />
		<div class="divAddTask">
			<input type="text" name="btnTaskName" class="btnTaskName" placeholder="Nova tarefa?" v-model="taskName">
			<button class="btnAddTask" @click="addTaskToList(taskListPayload)">+</button>
		</div>
		<keep-alive>
			<task-list />
		</keep-alive>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import ProgressBar from './components/ProgressBar.vue'
import TaskList from './components/TaskList.vue'

export default {
	components: {
		ProgressBar,
		TaskList
	},
	data () {
		return {
			taskName: '',
			taskList: []
		}
	},
	computed: {
		taskListPayload () {
			const payload = {
				taskName: this.taskName,
				status: 'pendent'
			}
			return payload
		}
	},
	methods: {
		...mapMutations(['addTaskToList'])
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.divAddTask {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
		width: 80%;
	}

	.divAddTask .btnTaskName {
		font-size: 20px;
		color: #FFF;
		width: 20%;
		height: 20px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
        border: 1px solid white;
		background: linear-gradient(to right, rgb(58, 96, 115));
		padding: 7px;
	}

	.divAddTask .btnAddTask {
		cursor: pointer;
		padding: 9px;
		color: #FFF;
        border: 1px solid white;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		background-color: royalblue;
		height: 36px;
	}
</style>
