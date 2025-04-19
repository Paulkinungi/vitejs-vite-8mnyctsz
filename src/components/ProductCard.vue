<template>
  
  <div class="productCard">
    <img id="ProdImage" :alt="title" :src="imageUrl"/>
    <div id="Imgdesc">
      <h1>{{ title }}</h1>
    <p>{{ currency }} {{ price }}</p>
    <label for=""><p>Favorite?</p>
      <input @click="toggleFav" type="checkbox">
    </label>
    <p id="isfavorite">{{ status }}</p>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      isfavorite:false,
      status:''
    }
  },
  props:{
    title:String,
    price:Number,
    imageUrl:String,
    currency:{
      type:String,
      default:'Kes'
    }
  },
  methods:{
    toggleFav(event){
      this.isfavorite =!this.isfavorite;
      this.status= this.isfavorite? "Marked Favorite" : "";
      this.$emit('favorite-toggled', this.isfavorite);
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