import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiShare, BiSolidShare  } from "react-icons/bi"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useFavoriteRecipesStore } from '../store/useFavoriteRecipesStore'

type PropsTypes = {
    data: RecipeTypes
}

const Recipe = ({data}: PropsTypes) => {
    const navigate = useNavigate()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const { addRecipe, favoriteRecipes, deleteRecipe } = useFavoriteRecipesStore()
    const [isHoveredIcon2, setIsHoveredIcon2] = useState<boolean>(false)

    const isRecipeFavorite = favoriteRecipes.find((recipe: RecipeTypes) => recipe.id === data.id)

    const handleRecipeAction = (recipe: RecipeTypes) => {
        if(isRecipeFavorite) {
            deleteRecipe(recipe.id)
        } else {
            addRecipe(recipe)
        }
    }

    return (
        <section className='flex flex-col min-h-[100px] bg-orange-100 rounded-xl'>
            <div className='w-full h-[200px] rounded-xl'>
                <img src={data.imagePath} alt={data.name} className='w-full h-full object-cover rounded-xl'/>
            </div>
            <section className='rounded-xl p-5'>
                <h2 className='text-black font-bold text-xl'>{data.name}</h2>
                <p className='text-sm mt-2 text-gray-700'>{data.description}</p>
                <section className='flexx space-x-2 mt-5'>
                    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                        className='p-2 rounded-full cursor-pointer flex-center border border-gray-600'>
                        {isHovered ? (
                            <BiSolidShare className='text-2xl'/>
                        ) : (
                            <BiShare className='text-2xl'/>
                        )}
                    </div>
                    <div onMouseEnter={() => setIsHoveredIcon2(true)} onMouseLeave={() => setIsHoveredIcon2(false)}
                        className='p-2 rounded-full cursor-pointer flex-center border border-gray-600' onClick={() => handleRecipeAction(data)}>
                        {isHoveredIcon2 ? (
                            <AiFillHeart className='text-2xl'/>
                        ) : (
                            isRecipeFavorite ? <AiFillHeart className='text-2xl'/> : <AiOutlineHeart className='text-2xl'/>
                        )}
                    </div>
                    <button className='bg-[#222] hover:bg-black py-2 px-4 rounded-full text-white' onClick={() => navigate(`/recipe/${data.id}`)}>Resep Detail</button>
                </section>
            </section>
        </section>
    )
}

export default Recipe