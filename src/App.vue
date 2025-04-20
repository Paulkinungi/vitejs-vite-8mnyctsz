<template>
  <h1>To Do List</h1>
  <Task-List :tasks="tasks"/>
  <Add-Task @addTask="addTask"/>
</template>

<script>
import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';

export default {
  components: { TaskList, AddTask },
  data() {
    return {
      tasks: [
        { id: 1, name: "Make pancakes", done: false },
        { id: 2, name: "Call the office", done: false },
        { id: 3, name: "Hold a 4h coding session", done: false },
        { id: 4, name: "Call Morgan", done: false },
        { id: 5, name: "Make Lunch", done: false }
      ]
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        id: this.tasks.length + 1,
        name: task,
        done: false
      });
    }
  }
}
</script>

<style>
body {
  background-color: #f5e1d3;
  font-family: 'Poppins', sans-serif;
  padding: 30px;
}

h1 {
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
}
</style>
