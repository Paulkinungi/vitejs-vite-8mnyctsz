<template>
    <ul id="container">
      <div id="header">
        <h3>Tasks</h3>
        <span style="font-weight: bold;">Done?</span>
      </div>
  
      <li id="item" v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.done" />
        <span :class="{ done: task.done }">{{ task.name }}</span>
      </li>
  
      <div id="heart">
        ❤️
      </div>
    </ul>
  </template>
  
  <script>
  export default {
    props: ['tasks']
  }
  </script>
  
  <style scoped>
  #container {
    padding: 20px;
    border-radius: 20px;
    background-color: #f5e1d3;
    max-width: 350px;
    margin: auto;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  #item {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 10px 15px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  
  input[type="checkbox"] {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2px solid #333;
    border-radius: 4px;
    margin-right: 12px;
    cursor: pointer;
    position: relative;
  }
  
  input[type="checkbox"]:checked::before {
    content: '✓';
    position: absolute;
    top: 0;
    left: 6px;
    font-size: 18px;
    color: #333;
  }
  
  .done {
    text-decoration: line-through;
    color: #777;
  }
  
  h3 {
    margin: 0;
  }
  
  #heart {
    font-size: 28px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  