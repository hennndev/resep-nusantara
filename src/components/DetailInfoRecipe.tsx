import clsx from 'clsx'
import { useState } from 'react'
import { LuClock } from "react-icons/lu"
import { GiKnifeFork } from "react-icons/gi"
import { BiShare, BiSolidShare  } from "react-icons/bi"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useFavoriteRecipesStore } from '../store/useFavoriteRecipesStore'

type PropsTypes = {
    recipe: RecipeTypes
}

const DetailInfoRecipe = ({recipe}: PropsTypes) => {
    const { favoriteRecipes } = useFavoriteRecipesStore()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isHoveredIcon2, setIsHoveredIcon2] = useState<boolean>(false)

    const isRecipeFavorite = favoriteRecipes.find(data => data.id === recipe.id)

    return (
        <section className='flex space-x-10'>
            <section className='w-[350px]'>
                <section className='w-full h-[350px]'>
                    <img src={recipe?.imagePath} alt={recipe?.name} className='w-full h-full object-cover rounded-xl'/>
                </section>
                <section className='w-full flexx space-x-3 mt-5'>
                    <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                        className='flex-1 py-2 px-4 rounded-full cursor-pointer flex-center border border-gray-300 hover:bg-black hover:text-white'>
                        {isHovered ? (
                            <BiSolidShare className='text-2xl mr-2'/>
                        ) : (
                            <BiShare className='text-2xl mr-2'/>
                        )}
                        Share
                    </button>
                    <button onMouseEnter={() => setIsHoveredIcon2(true)} onMouseLeave={() => setIsHoveredIcon2(false)}
                        className={clsx('flex-1 py-2 px-4 rounded-full cursor-pointer flex-center border border-gray-300 hover:bg-black hover:text-white', isRecipeFavorite && 'bg-black text-white')}>
                        {isHoveredIcon2 ? (
                            <AiFillHeart className='text-2xl mr-2'/>
                        ) : (
                            isRecipeFavorite ? <AiFillHeart className='text-2xl mr-2'/> : <AiOutlineHeart className='text-2xl mr-2'/>
                        )}
                        Simpan
                    </button>
                </section>
            </section>
            <section className='flex-1'>
                <h1 className='text-3xl font-bold'>{recipe?.name}</h1>
                <p className='text-gray-600 mt-3 text-lg'>{recipe?.description}</p>
                <section className='flex flex-col mt-5 space-y-3'>
                    <div className='flexx space-x-2'>
                        <LuClock className='text-xl'/>
                        <p className='text-gray-600 text-lg'>{recipe?.duration}</p>
                    </div>
                    <div className='flexx space-x-2'>
                        <GiKnifeFork className='text-xl'/>
                        <p className='text-gray-600 text-lg'>{recipe?.persons}</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='font-medium text-lg'>Bahan:</p>
                        {recipe?.ingredients.map((ingredient, index) => (
                            <p className='' key={index}>- {ingredient}</p>
                        ))}
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='font-medium text-lg'>Cara membuat:</p>
                        {recipe?.instructions.map((instruction, index) => (
                            <p className='' key={index}>- {instruction}</p>
                        ))}
                    </div>
                </section>
            </section>
        </section>
    )
}

export default DetailInfoRecipe