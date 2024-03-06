import { ref } from 'vue'

const getRecipes = () => {
  const recipes = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await fetch('http://localhost:3000/recipes')
      if (!response.ok) {
        throw new Error('No data available')
      }
      recipes.value = await response.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }
  return { recipes, error, load }
}

export default getRecipes
