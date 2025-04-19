import { createApp } from 'vue'

import App from './App.vue'
import ProductCard from './components/ProductCard.vue'

const app = createApp(App)
app.component('product-card', ProductCard)
app.mount("#app")
