
type PropsTypes = {
    idYoutube: string
}

const DetailInfoYoutubeRecipe = ({idYoutube}: PropsTypes) => {
    return (
        <div className='w-full h-[500px] mt-10'>
            <iframe 
                className='w-full h-full'
                src={`https://www.youtube.com/embed/${idYoutube}`} 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default DetailInfoYoutubeRecipe