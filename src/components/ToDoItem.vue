<template>
    <li @click="$emit('remove')">
      {{ itemName }}
    </li>
  </template>
  
  <script>
  export default {
    props: ['itemName']
  }
  </script>
  