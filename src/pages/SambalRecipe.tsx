import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { dataRecipes } from '../data/dataRecipe'
import RecipeList from '../components/RecipeList'
import { useSearchStore } from '../store/useSearchStore'

const SambalRecipes = () => {
    const location = useLocation()
    const { searchTerm } = useSearchStore()
    const resepSambal = dataRecipes.filter((recipe: RecipeTypes) => recipe.category === 'sambal')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    
    return (
        <section className='flex-1 mb-10'>
            <RecipeList data={resepSambal.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
        </section>
    )
}

export default SambalRecipes