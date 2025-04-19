<template>
  <div class="productCard">
    <img id="ProdImage" src="imgUrl">
    <h1>{{ title }}</h1>
    <p>{{ currency }}</p>
  </div>
</template>

<script>
export default{
  Props:{
    title:String,
    price:Number,
    imageUrl:String,
    currency:{
      type:String,
      default:'Kes'
    }
  }
}
</script>

<style>
</style>