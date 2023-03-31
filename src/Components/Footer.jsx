import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-purple-800 w-full'>
        <div className='flex w-full'>
            <div className='mx-4 w-1/2 text-center'>
                <h1 className='text-slate-100 font-semibold uppercase'>Informate:</h1>
                <ul className='text-slate-100'>
                    <a href="#" className='hover:text-slate-300'><li> Acerca de</li></a>
                    <a href="#" className='hover:text-slate-300'><li> Sobre Nosotros</li></a>
                    <a href="#" className='hover:text-slate-300'><li> Sobre Nosotros</li></a>
                </ul>
            </div>

            <div className='mx-4 w-1/2 text-center'>
                <h1 className='text-slate-100 font-semibold uppercase'>Redes Sociales</h1>
                <ul className='text-slate-100'>
                <a href="#" className='hover:text-slate-300'><li><i className="fa-brands fa-square-facebook mx-2"></i>Facebook</li></a>
                <a href="#" className='hover:text-slate-300'><li> <i className="fa-brands fa-square-instagram mx-2"></i>Instagram</li></a>
                <a href="#" className='hover:text-slate-300'><li> <i className="fa-brands fa-square-twitter mx-2"></i>Twitter</li></a>
                </ul>
            </div>

        </div>
    <h3 className='text-center text-slate-100 font-semibold my-2 '>Copyrigth ©️ 2023-2025</h3>
    </div>
    </>
  )
}

export default Footer