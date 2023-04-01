import React from 'react'

const Card = ({obj, deleteC, setEdit}) => {
    const {name, id, petName, petType, age, date, hour} = obj;

    const deleteCard = () => {
      deleteC(obj.id)
    }
    
    const editCard = () =>{
      setEdit(obj)
    }

    return (
    <div className='w-2/5 border-2 border-indigo-400 flex flex-col p-3 rounded-md bg-violet-200 shadow-md shadow-violet-800 h-64 mb-5'>
        
        <p className='font-semibold'>Id: <span className='font-normal'>{id}</span></p>
        <p className='font-semibold'>Name: <span className='font-normal'>{name}</span></p>
        <p className='font-semibold'>Pet Name: <span className='font-normal'>{petName}</span></p>
        <p className='font-semibold'>Pet Type: <span className='font-normal'>{petType}</span></p>
        <p className='font-semibold'>Age: <span className='font-normal'>{age}</span></p>
        <p className='font-semibold'>Date: <span className='font-normal'>{date}</span></p>
        <p className='font-semibold'>Hour: <span className='font-normal'>{hour}</span></p>
        <div className='flex w-full justify-between'>
            <button className='bg-indigo-500 w-1/2 mx-1 rounded-md font-bold text-slate-100 mt-3 p-2 hover:bg-indigo-700' onClick={editCard}>Edit</button>
            <button className='bg-indigo-500 w-1/2 mx-1 rounded-md font-bold text-slate-100 mt-3 p-2 hover:bg-indigo-700' onClick={deleteCard}>Delete</button>
        </div>
    </div>
  )
}

export default Card