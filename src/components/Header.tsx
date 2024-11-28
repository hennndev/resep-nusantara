import React from 'react'
import { useSearchStore } from '../store/useSearchStore'

const Header = () => {
    const { searchTerm, handleChange } = useSearchStore()
    return (
        <header className='sticky top-0 container py-4 bg-white'>
            <section className='flex-between'>
                <section className='flexx'>
                    <h1 className='text-3xl font-black text-[#222] mr-28'>ResepOtentik</h1>
                    <input 
                        value={searchTerm}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder='Cari resep nusantara berdasarkan nama...' 
                        className='w-[450px] text-lg border-none text-md outline-none p-3'/> 
                </section>
                <section className='flexx space-x-5'>
                    <button className='border-none outline-none p-3 text-lg'>Login</button>
                    <button className='border-none outline-none py-2 px-6 rounded-full text-lg bg-[#222] hover:bg-black text-white'>Daftar</button>
                </section>
            </section>
        </header>
    )
}

export default Header