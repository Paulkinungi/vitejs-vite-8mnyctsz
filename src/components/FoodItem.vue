<template>
  <div>
    <h2>{{ foodName }}</h2>
    <h2>{{ foodDesc }}</h2>
    <p>Is this your Favorite?
      {{ isFav.toString() }}
    </p>
    <button @click="togglefav">Favorite</button>
  </div>
</template>

<script>
export default{
  props:['foodName', 'foodDesc', 'favorite'],
  data(){
    return{
      isFav: this.favorite
    }
  },
  methods:{
    togglefav(event){
      this.isFav=!this.isFav;
    }
  }
}

</script>