import Home from './pages/Home'
import Favorite from './pages/Favorite'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import FoodRecipes from './pages/FoodRecipe'
import RecipeDetail from './pages/RecipeDetail'
import SambalRecipes from './pages/SambalRecipe'
import DrinkRecipes from './pages/DrinkRecipes'
import { Outlet, Routes, Route  } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route element={<MainWrapper/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/favorite' element={<Favorite/>}/>
                <Route path='/recipe/:id' element={<RecipeDetail/>}/>
                <Route path='/food-recipes' element={<FoodRecipes/>}/>
                <Route path='/sambal-recipes' element={<SambalRecipes/>}/>
                <Route path='/drink-recipes' element={<DrinkRecipes/>}/>
            </Route>
        </Routes>
    )
}

const MainWrapper = () => {
    return (
        <main>
            <Header/>
            <section className='flex container space-x-24 mt-10 min-h-screen'>
                <Sidebar/>
                <Outlet/>
            </section>
        </main>
    )
}

export default App