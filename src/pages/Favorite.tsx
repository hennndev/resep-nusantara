import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RecipeList from '../components/RecipeList'
import { useSearchStore } from '../store/useSearchStore'
import { useFavoriteRecipesStore } from '../store/useFavoriteRecipesStore'

const Favorite = () => {
    const location = useLocation()
    const { searchTerm } = useSearchStore()
    const { favoriteRecipes } = useFavoriteRecipesStore()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <section className='flex-1 mb-10'>
            <h1 className='text-xl font-semibold mb-10'>Daftar Resep Favorite</h1>
            {favoriteRecipes.length < 1 ? (
                <div className='-mt-5'>
                    <p className='text-gray-500'>Belum ada resep nusantara yang ditambah ke dalam daftar favorite</p>
                </div>
            ) : (
                <RecipeList data={favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
            )}
        </section>
    )
}

export default Favorite