/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState} from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import ButtonComponent from '../../components/ButtonComponent'
import ProgressCircular from '../../components/Progress'

export const CandyStore = () => {
    const [text, setText] = useState('')
    const {error, loading, data, getData, addData, deleteData, updateData} =useFirestore()

    const [newOriginID, setNewOriginID] = useState()// es para el boton de editar- empieza undefined
    useEffect(()=>{
        getData()
      },[])

    if(loading.getData) return <ProgressCircular/>
    if (error) return <p>{error}</p>

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (newOriginID) {
            await updateData(newOriginID, text)
            setNewOriginID('')
            setText('')
            return;
        }
        await addData(text)
        setText('')
    }

    const handleClickDelete = async(nanoid) => {
        console.log('eliminado', nanoid)
        await deleteData(nanoid)
    }
    const handleClickUpdate = (item) => {//editar
        setText(item.origin)
        setNewOriginID(item.nanoid)
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder='ex: https://diana.org'
        />
       

         {
             newOriginID ? (
                <ButtonComponent 
                type='submit'
                 variant="contained"
                 loading={loading.updateData}
                 > Editar URL </ButtonComponent>
             ) :(
                <ButtonComponent 
                type='submit'
                 variant="contained"
                 loading={loading.updateData}
                 > Agregar URL </ButtonComponent>
             )
         }
    </form>
    {data.map(item => 
        <div key={item.nanoid}>
            <p>{item.nanoid}</p>
            <p>{item.origin}</p>
            <p>{item.uid}</p>
            <ButtonComponent 
            type='submit'
            variant="contained"
            loading={loading[item.nanoid]}
            color='secondary'
            onClick={() => handleClickDelete(item.nanoid)}
            > Delete
            </ButtonComponent>
            <ButtonComponent 
            type='submit'
            variant="contained"
            color='inherit'
            onClick={() => handleClickUpdate(item)}
            > Editar
            </ButtonComponent>
        </div>    
    )}
    </>
  )
}
