<script setup lang="ts">
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <h2>{{ recipe.title }}</h2>
  <p>{{ recipe.kindOfRecipe }}</p>
  <ul>
    <li v-for="ingredient in recipe.ingredients" :key="ingredient">
      {{ ingredient }}
    </li>
  </ul>
</template>
