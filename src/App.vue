<template>
  <h3>Todo List</h3>
  <ul>
    <todo-item
      v-for="(x, index) in items"
      :key="index"
      :item-name="x"
      @remove="removeItem(index)"  
      style="background-color: lightgreen;"
    />
  </ul>

  <input v-model="newItem" placeholder="Add new todo" />
  <button @click="addItem">Add</button>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: ['Buy Apples', 'Make Pizza', 'Mow the Lawn']
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim() !== '') {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>
