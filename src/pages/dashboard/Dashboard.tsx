import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <section>
        <header>
        <Link className='text-2xl border rounded-md px-5 py-2 border-white hover:bg-blue-400 block py-4' to={"/"}> LES NOUVELLES VIES</Link>

        </header>
        <main>
            <Outlet />
        </main>

        <footer className='text-center text-gray-500 text-sm py-4'>
            copyright &copy; 2025 <span className='font-bold'> Sire bah </span>
        </footer>
    </section>
  )
}

export default Dashboard