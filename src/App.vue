<template>
  <div class="products-container">
    <product-card 
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :price="product.price"
      :image-url="product.imageUrl"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { title: "Dessert Cake", price: 2000, imageUrl: "/img/desert.jpeg" },
        { title: "Drinks", price: 2500, imageUrl: "/img/drink.jpeg" },
        { title: "Cake", price: 3000, imageUrl: "/img/fruit.jpeg" },
        { title: "Ice Cream", price: 1500, imageUrl: "/img/icecream.jpeg" },
        // Add more products here easily
      ]
    }
  }
}
</script>

<style>
.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
</style>
