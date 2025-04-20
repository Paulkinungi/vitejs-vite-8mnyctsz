<template>
  <div>
    <h3>Slots in Vue</h3>
    <p>We send 'Hello World!' as content to the slot tag inside the SlotComp.vue component from App.vue.</p>
    <Comp-two>Hello World!</Comp-two>
  </div>
</template>

<script></script>

<style>
  p {
    width: 200px;
  }
  #app div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
</style>                  