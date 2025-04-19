import { createApp } from 'vue'
import App from './App.vue'
import ToDoItem from './components/ToDoItem.vue'

const app = createApp(App)
app.component('todo-item', ToDoItem)
app.mount("#app")
