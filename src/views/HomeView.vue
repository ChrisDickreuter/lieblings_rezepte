<script setup lang="ts">
import RecipeList from '../components/RecipeList.vue'
import getRecipes from '../composables/getRecipes';

const { recipes, error, load } = getRecipes()

load()
</script>

<template>
  <main>
    <h1>Lieblings Rezepte</h1>
    <p v-if="error">Error: {{ error }}</p>
    <div v-if="recipes.length">
      <RecipeList :recipes="recipes" />
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
