import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { dataRecipes } from '../data/dataRecipe'
import RecipeList from '../components/RecipeList'
import { useSearchStore } from '../store/useSearchStore'

const DrinkRecipes = () => {
    const location = useLocation()
    const { searchTerm } = useSearchStore()
    const resepMinuman = dataRecipes.filter((recipe: RecipeTypes) => recipe.category === 'minuman')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    
    return (
        <section className='flex-1 mb-10'>
            <RecipeList data={resepMinuman.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
        </section>
    )
}

export default DrinkRecipes