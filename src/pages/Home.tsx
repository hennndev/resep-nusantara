import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { dataRecipes } from '../data/dataRecipe'
import RecipeList from '../components/RecipeList'
import { useSearchStore } from '../store/useSearchStore'

const Home = () => {
    const location = useLocation()
    const { searchTerm } = useSearchStore()
    const resepMakanan = dataRecipes.filter((recipe: RecipeTypes) => recipe.category === 'makanan')
    const resepSambal = dataRecipes.filter(recipe => recipe.category === 'sambal')
    const resepMinuman = dataRecipes.filter(recipe => recipe.category === 'minuman')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <section className='flex-1 mb-10'>
            <RecipeList title="Daftar Resep Otentik Makanan" data={resepMakanan.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
            <RecipeList title="Daftar Resep Otentik Sambal" data={resepSambal.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
            <RecipeList title="Daftar Resep Otentik Minuman" data={resepMinuman.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
        </section>
    )
}

export default Home