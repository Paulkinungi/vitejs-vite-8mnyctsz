<template>
    <div id="add-task">
      <input v-model="newTask" placeholder="Add a new task..." type="text" />
      <button @click="addTask">Add Task</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { newTask: "" }
    },
    emits: ['addTask'],
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.$emit('addTask', this.newTask)
          this.newTask = ""
        }
      }
    }
  }
  </script>
  
  <style scoped>
  #add-task {
    max-width: 350px;
    margin: 20px auto;
    text-align: center;
  }
  
  input[type="text"] {
    padding: 12px 20px;
    border-radius: 30px;
    border: 1px solid #ccc;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  button {
    background: #333;
    color: #fff;
    border: none;
    padding: 12px 20px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
  }
  
  button:hover {
    background: #555;
  }
  </style>
  