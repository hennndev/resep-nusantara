import { useEffect} from 'react'
import { dataRecipes } from '../data/dataRecipe'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import DetailInfoRecipe from '../components/DetailInfoRecipe'
import DetailInfoYoutubeRecipe from '../components/DetailInfoYoutubeRecipe'

type Params = {
    id: string
}

const RecipeDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams<Params>()

    if(!params.id) {
        navigate('/')
    }
    const id = parseInt(params.id as string)
    const recipe = dataRecipes.find(recipe => recipe.id === id)

    if(!recipe) {
        navigate('/')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    

    return (
        <section className='flex-1 mb-10'>
            <DetailInfoRecipe recipe={recipe as RecipeTypes}/>
            <DetailInfoYoutubeRecipe idYoutube={recipe?.idYoutube as string}/>
        </section>
    )
}

export default RecipeDetail