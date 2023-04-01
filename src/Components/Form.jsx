import React, { useState, useEffect } from 'react'
import List from './List'

const types = [
    "Domestico",
    "Granja",
    "Silvestre",
    'Conejo',
    'Raton'
]

const Form = () => {
    const [arrayInfo, setArrayInfo] = useState();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [age, setAge] = useState ('');
    const [date, setDate] = useState ('');
    const [hour, setHour] = useState ('');

    const [objectInfo, setObjectInfo] = useState()

    const [editState, setEditState] = useState(false)

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem("cards"));
        (Boolean(cards) || cards !== null) ? setArrayInfo(cards) : ""
    }, [])

    useEffect(() => {
        if (!objectInfo) return 
            return fillForm(objectInfo)
    }, [objectInfo])
    

    function resetValues() {
        setName('');
        setId('');
        setPetName('');
        setPetType('');
        setAge('');
        setDate('');
        setHour('');
    }
    
    function handleChange(e, setFunction) {
        return setFunction(e.target.value)
    }

    function addCard(upCard) {
     if (!upCard) {
        const obj = {
            name,
            id,
            petName,
            petType,
            age,
            date,
            hour
        }
            setArrayInfo(values => {
                // console.log(value)
                if (values) {
                    return [...values, obj]
                } else {
                    return [obj]
                }
            });
            resetValues();
        } else {
            updateCard();
         }
     } 

    function fillForm(obj) {
        if (!obj) return 
            setEditState(true)
            setName(obj.name);
            setId(obj.id);
            setPetName(obj.petName);
            setPetType(obj.petType);
            setAge(obj.age);
            setDate(obj.date);
            setHour(obj.hour);
            changeAddButton("UPDATE")
    }

    function changeAddButton(word) {
        const updateButton = document.querySelector("#addCard");
        updateButton.textContent = word;
    }

    function updateCard() {
        const newInfo = {
            name,
            id,
            petName,
            petType,
            age,
            date,
            hour
        }
        const index = arrayInfo.findIndex(obj => obj.id === id);
        
        setArrayInfo(actValues => ([...actValues.filter(value => value.id !== newInfo.id), newInfo]));
        resetValues();
        setEditState(false)
        changeAddButton("ADD")
    }

  return (
    <>
    <div className='flex w-full font1'>
        <div className='w-1/2'>
          <div className='flex flex-col bg-violet-300 w-1/2 mx-auto my-5 py-5 px-5 rounded-lg shadow-md shadow-violet-600 border-2 border-indigo-400'>

            <div>
                <label htmlFor="name" className='font-semibold block uppercase'>Name:</label>
                <input id='name' type="text" name='name' className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={name} onChange={e => handleChange(e, setName)} />
            </div>
            <div>
                <label htmlFor="id" className='font-semibold block uppercase'>Identification:</label>
                <input id='id' type="number" name='id' className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={id} onChange={(e) => handleChange(e, setId)} />
            </div>
            <div>
                <label htmlFor="petName" className='font-semibold block uppercase'>Pet Name:</label>
                <input id='petName' type="text" name='petName' className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={petName} onChange={(e) => handleChange(e, setPetName)} />
            </div>
            <div>
                <label htmlFor="petType" className='font-semibold block uppercase'>Pet Type:</label>
                <select name="petType" id="petType" className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 bg-slate-100' value={petType} onChange={(e) => handleChange(e, setPetType)}>
                    <option value=""></option>
                    {
                    types.map( type => (
                        <option key={type} value={type}>{type}</option>
                     ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="age" className=' font-semibold block uppercase'>age:</label>
                <input id='age' name='age' type="number" className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={age} onChange={(e)=> handleChange(e, setAge)} />
            </div>
            <div>
                <label htmlFor="date" className=' font-semibold block uppercase'>date:</label>
                <input id='date' name='date' type="date" className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={date} onChange={(e)=> handleChange(e, setDate)} />
            </div>
            <div>
                <label htmlFor="hour" className=' font-semibold block uppercase'>hour:</label>
                <input id='hour' name='hour' type="time" className='rounded-md mb-3 w-full h-8 px-2 outline-none border-2 border-indigo-400 focus:border-indigo-500 bg-slate-100' value={hour} onChange={(e)=> handleChange(e, setHour)} />
            </div>

            <div>
                <button id="addCard" className='rounded-md mb-3 w-full h-10 border-2 border-indigo-800 bg-indigo-600 hover:bg-indigo-500 font-bold text-white' onClick={() => addCard(editState)} >ADD</button>
            </div>
          </div>
        </div>

        <List 
            arrayInfo={arrayInfo}
            setArrInfo={setArrayInfo}
            setObjInfo={setObjectInfo}
        />
        
    </div>
    </>
  )
}

export default Form