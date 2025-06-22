
import { Link } from 'react-router-dom';
import Users from './pages/users/Users';
import { USERS } from './utils/data';




function App() {
    
  return (
    <>
    <div className='relative'>
      <div className='absolute top-10 left-5 text-2xl uppercase text-white'>Les nouvelles vies </div>

    </div>
    
    <section className='grid grid-cols-2  mx-auto'>

    <div className='bg-blue-800 text-white h-screen flex flex-col items-center justify-center' >
        <Link className='text-2xl border rounded-md px-5 py-2 border-white hover:bg-blue-400' to={"/menu/users"}> Les Utilisateur</Link>
    </div>
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200 text-red-800'>
        <Link className='text-2xl border rounded-md px-5 py-2 border-gray-800 hover:bg-red-200' to={"/menu/demandes"}> Le Dashboard</Link>

    </div>
     
  </section>
  
  </>
    
  );
 
}

export default App
