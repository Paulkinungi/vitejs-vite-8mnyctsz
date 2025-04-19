<template>
  
  <div class="productCard">
    <img id="ProdImage" :alt="title" :src="imageUrl"/>
    <div id="Imgdesc">
      <h1>{{ title }}</h1>
    <p>{{ currency }} {{ price }}</p>
    </div>
  </div>
</template>

<script>
export default{
  props:{
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
.productCard{

  border:1px solid #ccc;
  padding:1rem;
  text-align:center;
  border-radius: 8px;
  max-width: 200px;
}
#ProdImage{
  width:100%;
  height:auto;
}


</style>