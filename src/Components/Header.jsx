import React from 'react'

const Header = () => {
  return (
    <div className='font1'>
        <h1 className='text-slate-100 bg-purple-800 h-20 font-bold flex justify-center p-5 text-3xl'>Citas Yavirac</h1>    
        <section className='bg-purple-900 text-slate-100 flex justify-evenly p-2 h-16 shadow-md shadow-gray-900'>
            <button className='hover:font-bold hover:bg-purple-800 p-1 rounded-lg transition-all'>
                Inicio <i className="fa-sharp fa-solid fa-caret-down"></i>
                </button>
            <button className='hover:font-bold hover:bg-purple-800 p-1 rounded-lg transition-all'>
                Menú <i className="fa-solid fa-compass"></i>
                </button>
            <button className='hover:font-bold hover:bg-purple-800 p-1 rounded-lg transition-all'>
                Nosotros <i className="fa-solid fa-users"></i>
                </button>
        </section>
    </div>
)
}

export default Header