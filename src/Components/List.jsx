import React, { useEffect, useState } from 'react'
import Card from './Card'

const List = ({arrayInfo, setArrInfo, setObjInfo}) => {
  const [idDeleteCard, setIdDeleteCard] = useState();
  const [editCardInfo, setEditCardInfo] = useState()

  useEffect(() => {
    setObjInfo(editCardInfo)
  }, [editCardInfo])

  useEffect(() => {
    if (!arrayInfo) return
   const filteredArrayInfo = arrayInfo.filter(item => item.id !== idDeleteCard)
   setArrInfo(filteredArrayInfo)

    localStorage.setItem("cards", JSON.stringify(filteredArrayInfo))

    console.log(arrayInfo)
  }, [idDeleteCard])

  useEffect(() => {
    if (!arrayInfo) return

    return localStorage.setItem("cards", JSON.stringify(arrayInfo))
  }, [arrayInfo])
  

  return (
    <div className='w-1/2 mt-5 flex justify-evenly flex-wrap h-screen overflow-auto' id='cardsList'>
        {
          !arrayInfo || !arrayInfo.length ? 
          "Sin Info" : 
          arrayInfo.map(obj => (<Card obj={obj} key={obj.id} deleteC={setIdDeleteCard} setEdit={setEditCardInfo} />))
        }
    </div>
  )
}

export default List