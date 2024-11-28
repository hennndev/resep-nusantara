import clsx from 'clsx'
import { IoMdHeart } from "react-icons/io"
import { PiBowlFood } from "react-icons/pi"
import { LuMenuSquare } from "react-icons/lu"
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineEmojiFoodBeverage } from "react-icons/md"


const Sidebar = () => {
    const location = useLocation()
    const pathname = location.pathname

    return (
        <aside className='flex h-full sticky top-32 flex-col space-y-6'>
            <Link to='/' className={clsx('group hover:bg-[#222] flexx space-x-4 py-3 px-6 rounded-full cursor-pointer', pathname === '/' ? 'bg-[#222]' : 'bg-transparent')}>
                <LuMenuSquare className={clsx('group-hover:text-white text-2xl', pathname === '/' ? 'text-white' : 'text-[#222]')}/>
                <p className={clsx('text-lg font-semibold group-hover:text-white', pathname === '/' ? 'text-white' : 'text-[#222]')}>Daftar Resep</p>
            </Link>
            <Link to='/favorite' className={clsx('group hover:bg-[#222] flexx space-x-4 py-3 px-6 rounded-full cursor-pointer', pathname === '/favorite' ? 'bg-[#222]' : 'bg-transparent')}>
                <IoMdHeart className={clsx('text-2xl group-hover:text-white', pathname === '/favorite' ? 'text-white' : 'text-[#222]')}/>
                <p className={clsx('text-lg font-semibold group-hover:text-white', pathname === '/favorite' ? 'text-white' : 'text-[#222]')}>Resep Favorite</p>
            </Link>

            <section className='mt-5'>
                <h2 className='text-gray-400 font-medium mb-4'>Kategori</h2>
                <section className='flex flex-col space-y-4'>
                    <Link to='/food-recipes' className={clsx('group hover:bg-[#222] flexx space-x-4 py-3 px-6 rounded-full cursor-pointer', pathname === '/food-recipes' ? 'bg-[#222]' : 'bg-transparent')}>
                        <PiBowlFood className={clsx('text-2xl group-hover:text-white', pathname === '/food-recipes' ? 'text-white' : 'text-[#222]')}/>
                        <p className={clsx('text-lg font-semibold group-hover:text-white', pathname === '/food-recipes' ? 'text-white' : 'text-[#222]')}>Resep Makanan</p>
                    </Link>
                    <Link to='/sambal-recipes' className={clsx('group hover:bg-[#222] flexx space-x-4 py-3 px-6 rounded-full cursor-pointer', pathname === '/sambal-recipes' ? 'bg-[#222]' : 'bg-transparent')}>
                        <PiBowlFood className={clsx('text-2xl group-hover:text-white', pathname === '/sambal-recipes' ? 'text-white' : 'text-[#222]')}/>
                        <p className={clsx('text-lg font-semibold group-hover:text-white', pathname === '/sambal-recipes' ? 'text-white' : 'text-[#222]')}>Resep Sambal</p>
                    </Link>
                    <Link to='/drink-recipes' className={clsx('group hover:bg-[#222] flexx space-x-4 py-3 px-6 rounded-full cursor-pointer', pathname === '/drink-recipes' ? 'bg-[#222]' : 'bg-transparent')}>
                        <MdOutlineEmojiFoodBeverage className={clsx('text-2xl group-hover:text-white', pathname === '/drink-recipes' ? 'text-white' : 'text-[#222]')}/>
                        <p className={clsx('text-lg font-semibold group-hover:text-white', pathname === '/drink-recipes' ? 'text-white' : 'text-[#222]')}>Resep Minuman</p>
                    </Link>
                </section>
            </section>
        </aside>
    )
}

export default Sidebar