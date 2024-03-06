<script setup lang="ts">
import SingleRecipe from './SingleRecipe.vue'

defineProps({
  recipes: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="recipe-list">
    <div v-for="recipe in recipes" :key="recipe.id">
       <SingleRecipe :recipe="recipe" />
    </div>
  </div>
</template>

<style>

</style>