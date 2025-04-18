<template>
  <h1>Food</h1>
  <p>My favorite food has a degree attached to it</p>
  <div id="wrapper">
    <food-item
    food-name = "Apples"
    food-desc = "Apples are a type of fruit that grow on trees."
    :is-favorite="true"/>

    <food-item
    food-name = "Pizza"
    food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
    :is-favorite="true"/>

    <food-item
    food-name="Rice"
    food-desc="Rice is a type of grain that people like to eat."
    :is-favorite="false"/>
  </div>
</template>


