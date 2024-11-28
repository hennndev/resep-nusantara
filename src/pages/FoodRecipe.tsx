import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { dataRecipes } from '../data/dataRecipe'
import RecipeList from '../components/RecipeList'
import { useSearchStore } from '../store/useSearchStore'

const FoodRecipes = () => {
    const location = useLocation()
    const { searchTerm } = useSearchStore()
    const resepMakanan = dataRecipes.filter((recipe: RecipeTypes) => recipe.category === 'makanan')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <section className='flex-1 mb-10'>
            <RecipeList data={resepMakanan.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
        </section>
    )
}

export default FoodRecipes