import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface FavoriteRecipesStoreTypes {
    favoriteRecipes: RecipeTypes[]
    addRecipe: (recipe: RecipeTypes) => void
    deleteRecipe: (recipeId: number) => void
}

export const useFavoriteRecipesStore = create(
    persist<FavoriteRecipesStoreTypes>(
        (set) => ({
            favoriteRecipes: [],
            addRecipe: (recipe: RecipeTypes) => {
                set((state) => ({
                    favoriteRecipes: [...state.favoriteRecipes, recipe], // Add the new object
                }))
            },
            deleteRecipe: (recipeId: number) => {
                set((state) => ({
                    favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe.id !== recipeId)
                }))
            }
        }),
        {
            name: 'favorite-recipe', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
)
