<template>
  <h1>Food</h1>
  <p>Components created with v-for based on an array</p>
  <div id="wrapper">
    <food-item      
    v-for="(x, index) in foods" 
    :key="index"
    v-bind:food.name="x.name"
    :food.desc="x.desc"
    :food.favorite="x.favorite"/>
  </div>
</template>

<script>
export default{
  data(){
    return{
      foods: [
        {
        name:'Apple',
        desc:'Apples are a type of fruit that grow on trees',
        favorite:true
      },
      {
        name:'Pizza',
        desc:"Pizza has a bread base with tomato sauce, cheese, and toppings on top",
        favorite:false
      },
      {
        name:'Rice',
        desc:'Rice is a type of grain that people like to eat',
        favorite:false
      }
    ]
    };
  }
}
</script>

<style>

</style>