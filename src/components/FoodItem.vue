<template>
<h2>
{{foodName}}
</h2>
  <div>
    {{foodDesc}}<br/>
    <button @click="changeFav"> Mark Favorite</button>
    {{foodisFavorite.toString()}}
  </div>
</template>

<script>
export default{
  props:{
    foodName:{
      type:String,
      required:true
    },
    foodDesc:{
      type:String,
      required:false,
      default:'This is the default description',
      validator:function(value){
        if(20<value.length && value.length<50){
          return true;
        }
        else{
          return false;
        }
      }
    },
    isFavorite:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  data(){
    return{
      foodisFavorite:this.isFavorite
    }
  },
  methods:{
    changeFav(event){
      this.foodisFavorite =!this.foodisFavorite;
    }
  }
}
</script>
<style>
img{
  height:1.5rem;
  width:3rem;
  float:right;
}
</style>