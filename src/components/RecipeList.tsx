import React from 'react'
import Recipe from './Recipe'

type PropsTypes = {
    title?: string
    data: RecipeTypes[]
}

const RecipeList = ({data, title}: PropsTypes) => {
    return (
        <section className='mb-16'>
            {title && <h1 className='text-xl font-semibold mb-10'>{title}</h1>}
            {data.length > 0 ? (
                <section className='grid grid-cols-card gap-10'>
                    {data.map((data) => (
                        <Recipe data={data} key={data.id}/>
                    ))}
                </section>
            ) : (
                <div className='-mt-5'>
                    <p className='text-gray-500'>Recipe tidak ditemukan untuk saat ini</p>
                </div>
            )}
        </section>
    )
}

export default RecipeList